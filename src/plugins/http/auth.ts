import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import * as jose from 'jose';

const authPlugin = async (fastify: FastifyInstance) => {
  const { config } = fastify.dependencies;
  const issuer: string = config.zitadelIssuer;
  const audience: string = config.zitadelClientId;
  const JWKS = jose.createRemoteJWKSet(new URL(`${config.zitadelIssuer}/oauth/v2/keys`));

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
        issuer: issuer,
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
