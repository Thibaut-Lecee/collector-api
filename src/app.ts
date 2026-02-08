import Cors from '@fastify/cors';
import Helmet from '@fastify/helmet';
import type { Dependencies } from '@infrastructure/di';
import type { FastifyInstance } from 'fastify';
import articleController from './features/article/controller/article-controller';
import dependencyInjectionPlugin from './plugins/dependency-injection';
import errorHandlerPlugin from './plugins/error-handler';
import grafanaProxyPlugin from './plugins/grafana-proxy';
import healthPlugin from './plugins/health';
import auth from './plugins/http/auth';
import metricsPlugin from './plugins/metrics';
import rateLimitPlugin from './plugins/rate-limit';
import swaggerPlugin from './plugins/swagger';

export async function app(fastify: FastifyInstance, dependencies: Dependencies) {
  const { config } = dependencies;
  const isProduction = config.env === 'production';
  const corsOrigin = config.corsOrigin ?? !isProduction;

  fastify.addHook('onClose', async () => {
    await dependencies.dispose();
  });

  await fastify.register(dependencyInjectionPlugin, { dependencies });
  // CSP is not useful for JSON APIs and breaks proxied HTML apps like Grafana (inline scripts).
  await fastify.register(Helmet, { global: true, contentSecurityPolicy: false });
  await fastify.register(Cors, { origin: corsOrigin });
  await fastify.register(metricsPlugin);

  if (!isProduction) {
    await fastify.register(swaggerPlugin);
  }

  await fastify.register(auth);
  await fastify.register(rateLimitPlugin);
  await fastify.register(grafanaProxyPlugin);
  await fastify.register(errorHandlerPlugin);
  await fastify.register(healthPlugin);
  await fastify.register(articleController);

  return fastify;
}
