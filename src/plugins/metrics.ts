import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

type RequestLabels = {
  method: string;
  route: string;
  status_code: string;
};

type HistogramState = {
  countsPerBucket: number[];
  sum: number;
};

const DEFAULT_BUCKETS_SECONDS = [
  0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5, 5, 10,
];

const START_TIME_SECONDS = Math.floor(Date.now() / 1000);
const START_TIME_KEY = Symbol('metrics_start_time');

function escapeLabelValue(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
}

function formatLabels(labels: Record<string, string>): string {
  const pairs = Object.entries(labels)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}="${escapeLabelValue(value)}"`);
  return pairs.length > 0 ? `{${pairs.join(',')}}` : '';
}

function labelsKey(labels: RequestLabels): string {
  // Use a stable delimiter that can't appear in HTTP method.
  return `${labels.method}\t${labels.route}\t${labels.status_code}`;
}

function parseLabelsKey(key: string): RequestLabels {
  const [method = 'UNKNOWN', route = 'unmatched', status_code = '0'] = key.split('\t');
  return { method, route, status_code };
}

function getRouteLabel(request: FastifyRequest): string {
  const routeOptionsUrl = request.routeOptions?.url;
  if (typeof routeOptionsUrl === 'string' && routeOptionsUrl.length > 0) {
    return routeOptionsUrl;
  }

  const routerPath = (request as unknown as { routerPath?: unknown }).routerPath;
  if (typeof routerPath === 'string' && routerPath.length > 0) {
    return routerPath;
  }

  return 'unmatched';
}

function observeHistogram(state: HistogramState, buckets: number[], valueSeconds: number) {
  state.sum += valueSeconds;
  const bucketIndex = buckets.findIndex((bucket) => valueSeconds <= bucket);
  const index = bucketIndex === -1 ? buckets.length : bucketIndex;
  state.countsPerBucket[index] = (state.countsPerBucket[index] ?? 0) + 1;
}

function renderHistogram(
  metricName: string,
  labels: RequestLabels,
  state: HistogramState,
  buckets: number[],
): string[] {
  const lines: string[] = [];

  let cumulative = 0;
  for (let i = 0; i < buckets.length; i++) {
    cumulative += state.countsPerBucket[i] ?? 0;
    lines.push(
      `${metricName}_bucket${formatLabels({
        ...labels,
        le: buckets[i].toString(),
      })} ${cumulative}`,
    );
  }

  cumulative += state.countsPerBucket[buckets.length] ?? 0;
  lines.push(
    `${metricName}_bucket${formatLabels({ ...labels, le: '+Inf' })} ${cumulative}`,
  );
  lines.push(`${metricName}_sum${formatLabels(labels)} ${state.sum}`);
  lines.push(`${metricName}_count${formatLabels(labels)} ${cumulative}`);

  return lines;
}

async function metricsPlugin(fastify: FastifyInstance) {
  const requestCounts = new Map<string, number>();
  const requestDurations = new Map<string, HistogramState>();
  const buckets = DEFAULT_BUCKETS_SECONDS;

  fastify.addHook('onRequest', async (request) => {
    (request as unknown as Record<symbol, bigint>)[START_TIME_KEY] = process.hrtime.bigint();
  });

  fastify.addHook('onResponse', async (request, reply) => {
    const start = (request as unknown as Record<symbol, bigint>)[START_TIME_KEY];
    if (typeof start !== 'bigint') return;

    const durationSeconds = Number(process.hrtime.bigint() - start) / 1e9;
    const labels: RequestLabels = {
      method: request.method,
      route: getRouteLabel(request),
      status_code: String(reply.statusCode),
    };

    const key = labelsKey(labels);

    requestCounts.set(key, (requestCounts.get(key) ?? 0) + 1);

    const existing = requestDurations.get(key);
    if (existing) {
      observeHistogram(existing, buckets, durationSeconds);
    } else {
      const state: HistogramState = {
        countsPerBucket: new Array(buckets.length + 1).fill(0),
        sum: 0,
      };
      observeHistogram(state, buckets, durationSeconds);
      requestDurations.set(key, state);
    }
  });

  fastify.route({
    method: 'GET',
    url: '/metrics',
    schema: {
      summary: 'Prometheus metrics',
      description:
        'Exposes Prometheus metrics in the text exposition format. Intended for scraping by Prometheus.',
      tags: ['observability'],
    },
    handler(_request: FastifyRequest, reply: FastifyReply) {
      const lines: string[] = [];

      // Process metrics (minimal set, no external deps)
      lines.push('# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.');
      lines.push('# TYPE process_start_time_seconds gauge');
      lines.push(`process_start_time_seconds ${START_TIME_SECONDS}`);

      lines.push('# HELP process_uptime_seconds Uptime of the process in seconds.');
      lines.push('# TYPE process_uptime_seconds gauge');
      lines.push(`process_uptime_seconds ${process.uptime()}`);

      const mem = process.memoryUsage();
      lines.push('# HELP process_resident_memory_bytes Resident memory size in bytes.');
      lines.push('# TYPE process_resident_memory_bytes gauge');
      lines.push(`process_resident_memory_bytes ${mem.rss}`);
      lines.push('# HELP process_heap_used_bytes Process heap used in bytes.');
      lines.push('# TYPE process_heap_used_bytes gauge');
      lines.push(`process_heap_used_bytes ${mem.heapUsed}`);
      lines.push('# HELP process_heap_total_bytes Process heap total in bytes.');
      lines.push('# TYPE process_heap_total_bytes gauge');
      lines.push(`process_heap_total_bytes ${mem.heapTotal}`);

      const cpu = process.cpuUsage();
      lines.push('# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.');
      lines.push('# TYPE process_cpu_user_seconds_total counter');
      lines.push(`process_cpu_user_seconds_total ${cpu.user / 1e6}`);
      lines.push('# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.');
      lines.push('# TYPE process_cpu_system_seconds_total counter');
      lines.push(`process_cpu_system_seconds_total ${cpu.system / 1e6}`);

      // HTTP metrics
      lines.push('# HELP http_requests_total Total number of HTTP requests processed.');
      lines.push('# TYPE http_requests_total counter');
      for (const [key, count] of requestCounts.entries()) {
        const labels = parseLabelsKey(key);
        lines.push(`http_requests_total${formatLabels(labels)} ${count}`);
      }

      lines.push('# HELP http_request_duration_seconds HTTP request duration in seconds.');
      lines.push('# TYPE http_request_duration_seconds histogram');
      for (const [key, state] of requestDurations.entries()) {
        const labels = parseLabelsKey(key);
        lines.push(...renderHistogram('http_request_duration_seconds', labels, state, buckets));
      }

      reply.header('content-type', 'text/plain; version=0.0.4; charset=utf-8');
      return reply.send(`${lines.join('\n')}\n`);
    },
  });
}

export default fp(metricsPlugin, {
  name: 'metrics-plugin',
  // Ensure hooks apply to all routes registered in sibling plugins.
  encapsulate: false,
});
