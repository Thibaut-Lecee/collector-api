import 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      sub?: string;
      email?: string;
      roles?: Record<string, unknown>;
    };
  }

  interface FastifyInstance {
    authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void> | void;
  }
}
