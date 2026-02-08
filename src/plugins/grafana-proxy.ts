import { Readable } from 'node:stream';
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

const HOP_BY_HOP_HEADERS = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailer',
  'transfer-encoding',
  'upgrade',
]);

function copyUpstreamHeadersToReply(reply: FastifyReply, upstream: Response) {
  // Node fetch merges headers, but set-cookie can have multiple values.
  const getSetCookie = (upstream.headers as unknown as { getSetCookie?: () => string[] }).getSetCookie;
  const setCookies = typeof getSetCookie === 'function' ? getSetCookie.call(upstream.headers) : [];

  for (const [key, value] of upstream.headers.entries()) {
    const lowerKey = key.toLowerCase();
    if (HOP_BY_HOP_HEADERS.has(lowerKey)) continue;
    if (lowerKey === 'set-cookie') continue;
    reply.header(key, value);
  }

  for (const cookie of setCookies) {
    reply.header('set-cookie', cookie);
  }
}

function buildUpstreamRequestInit(request: FastifyRequest): RequestInit {
  const headers = new Headers();
  for (const [key, value] of Object.entries(request.headers)) {
    if (value === undefined) continue;
    const lowerKey = key.toLowerCase();
    if (HOP_BY_HOP_HEADERS.has(lowerKey)) continue;
    if (lowerKey === 'host') continue;

    if (Array.isArray(value)) {
      for (const item of value) headers.append(key, item);
      continue;
    }
    headers.set(key, value);
  }

  // Help upstream apps build correct absolute URLs when needed.
  if (request.headers.host) headers.set('x-forwarded-host', request.headers.host);
  headers.set('x-forwarded-proto', request.protocol);

  const method = request.method.toUpperCase();
  const hasBody = !['GET', 'HEAD'].includes(method);

  const init: RequestInit = { method, headers, redirect: 'manual' };

  if (hasBody && request.body !== undefined) {
    if (typeof request.body === 'string') {
      init.body = request.body;
    } else if (request.body instanceof Uint8Array) {
      init.body = request.body;
    } else if (typeof request.body === 'object') {
      // Fastify typically parses JSON bodies into objects; re-encode for upstream.
      if (!headers.has('content-type')) headers.set('content-type', 'application/json');
      init.body = JSON.stringify(request.body);
    } else {
      init.body = String(request.body);
    }
  }

  return init;
}

async function grafanaProxyPlugin(fastify: FastifyInstance) {
  const { grafanaUrl } = fastify.dependencies.config;

  if (!grafanaUrl) {
    fastify.log.warn('GRAFANA_URL not set; /internal/grafana proxy is disabled');
    return;
  }

  const handler = async (request: FastifyRequest, reply: FastifyReply) => {
    const upstreamUrl = new URL(request.raw.url ?? request.url, grafanaUrl);

    const upstream = await fetch(upstreamUrl, buildUpstreamRequestInit(request));

    reply.status(upstream.status);
    copyUpstreamHeadersToReply(reply, upstream);

    if (!upstream.body) {
      return reply.send();
    }

    // Convert Web stream to Node stream so Fastify can pipe it.
    const stream = Readable.fromWeb(upstream.body as unknown as Parameters<typeof Readable.fromWeb>[0]);
    return reply.send(stream);
  };

  // Handle both "/internal/grafana" and "/internal/grafana/*"
  const routeOptions = {
    config: {
      rateLimit: false,
      helmet: false,
    },
  } as const;

  fastify.all('/internal/grafana', routeOptions, handler);
  fastify.all('/internal/grafana/*', routeOptions, handler);
}

export default fp(grafanaProxyPlugin, {
  name: 'grafana-proxy-plugin',
  dependencies: ['dependency-injection-plugin'],
});
