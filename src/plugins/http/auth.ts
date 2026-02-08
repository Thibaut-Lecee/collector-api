import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import * as jose from 'jose';

const authPlugin = async (fastify: FastifyInstance) => {
  const { config } = fastify.dependencies;
  const issuer: string = config.zitadelIssuer;
  const internalIssuer: string = config.zitadelInternalIssuer ?? issuer;
  const audience: string = config.zitadelClientId;

  // ZITADEL selects the instance by Host header. When calling it from inside Docker/K8s using
  // a service name (e.g. http://zitadel:8080), we must still send the public Host (e.g. localhost:8080).
  const publicHost = new URL(issuer).host;
  const JWKS = jose.createRemoteJWKSet(new URL(`${internalIssuer}/oauth/v2/keys`), {
    headers: {
      host: publicHost,
    },
  });

  const authenticate = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    // On récupère le token d'authentification depuis les headers
    const authHeader = request.headers.authorization;
    // On vérifie que le header est présent et qu'il commence par "Bearer "

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      reply.status(401).send({ message: 'Unauthorized' });
      return;
    }
    const token = authHeader.slice('Bearer '.length);

    try {
      const { payload } = await jose.jwtVerify(token, JWKS, {
        audience: audience,
        issuer,
      });
      // On attache le payload du token à la requête pour une utilisation ultérieure
      request.user = payload;
    } catch (error) {
      reply.status(401).send({ message: 'Unauthorized', error: (error as Error).message });
    }
  };
  fastify.decorate('authenticate', authenticate);
};

export default fp(authPlugin, {
  name: 'auth-plugin',
  dependencies: ['dependency-injection-plugin'],
});
