import type { UseCaseDependencies } from '@infrastructure/di';
import { PrismaRepositoryError } from '@infrastructure/repositories/article/PrismaArticleRepository';
import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { CreateArticleUseCase } from '../useCases/CreateArticleUseCase';
import { FindAllArticleUseCase } from '../useCases/FindAllArticleUseCase';
import { FindArticleByIdUseCase } from '../useCases/FindArticleById';
import { PaginatedArticleUseCase } from '../useCases/PaginatedArticleUseCase';

// HTTP validation schema (route layer)
const createArticleBodySchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(5000),
  price: z.number().min(0),
  userId: z.string(),
  categories: z.array(z.string()).optional(),
});

export default async function articleController(fastify: FastifyInstance) {
  // If you store dependencies on fastify (as in your existing code), keep using it.
  // Otherwise, replace `fastify.dependencies` by however you access DI.
  const deps = (fastify as unknown as { dependencies: UseCaseDependencies }).dependencies;

  fastify.post('/api/v1/articles', {
    schema: {
      summary: 'Create an article',
      tags: ['articles'],
      body: {
        type: 'object',
        required: ['title', 'description', 'price', 'userId'],
        properties: {
          title: { type: 'string', minLength: 1, maxLength: 255 },
          description: { type: 'string', minLength: 1, maxLength: 5000 },
          price: { type: 'number', minimum: 0 },
          userId: { type: 'string' },
          categories: { type: 'array', items: { type: 'string' } },
        },
      },
      response: {
        201: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' },
            userId: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: ['string', 'null'] },
            isPublished: { type: 'boolean' },
            images: { type: 'array', items: { type: 'object' } },
            categories: { type: 'array', items: { type: 'object' } },
          },
        },
        400: { $ref: 'ErrorResponse#' },
        409: { $ref: 'ErrorResponse#' },
        500: { $ref: 'ErrorResponse#' },
      },
    },
    handler: async (request, reply) => {
      const { logger, repositories } = deps;

      const parsed = createArticleBodySchema.safeParse(request.body);
      if (!parsed.success) {
        logger.warn({ issues: parsed.error.issues }, 'Invalid create article payload');
        return reply.status(400).send({
          message: 'Invalid request body',
          statusCode: 400,
          details: parsed.error.issues,
        });
      }

      try {
        const useCase = new CreateArticleUseCase(repositories.articleRepository);
        const articleDto = await useCase.execute({
          title: parsed.data.title,
          description: parsed.data.description,
          price: parsed.data.price,
          userId: parsed.data.userId,
        });

        return reply.status(201).send(articleDto);
      } catch (error) {
        // Known infra errors mapped to domain-friendly errors
        if (error instanceof PrismaRepositoryError) {
          if (error.kind === 'duplicate') {
            return reply.status(409).send({
              message: error.message,
              statusCode: 409,
              kind: error.kind,
            });
          }

          return reply.status(500).send({
            message: 'Database error',
            statusCode: 500,
            kind: error.kind,
          });
        }

        logger.error({ error }, 'Error creating article');
        return reply.status(500).send({ message: 'Internal server error', statusCode: 500 });
      }
    },
  });

  fastify.delete('/api/v1/articles/clearAll', {
    schema: {
      summary: 'Clear all articles (for testing purposes)',
      tags: ['articles'],
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
        500: { $ref: 'ErrorResponse#' },
      },
    },
    handler: async (_request, reply) => {
      const { logger, repositories } = deps;
      try {
        await repositories.articleRepository.deleteAll();
        return reply.status(200).send({ message: 'All articles cleared' });
      } catch (error) {
        logger.error({ error }, 'Error clearing articles');
        return reply.status(500).send({ message: 'Internal server error', statusCode: 500 });
      }
    },
  });

  fastify.route({
    method: 'GET',
    url: '/api/v1/articles/findAll',
    schema: {
      summary: 'Find all articles',
      tags: ['articles'],
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              title: { type: 'string' },
              description: { type: 'string' },
              price: { type: 'number' },
              userId: { type: 'string' },
              createdAt: { type: 'string' },
              updatedAt: { type: ['string', 'null'] },
              isPublished: { type: 'boolean' },
              images: { type: 'array', items: { type: 'object' } },
              categories: { type: 'array', items: { type: 'object' } },
            },
          },
        },
        204: {
          description: 'No articles found',
        },

        500: { $ref: 'ErrorResponse#' },
      },
    },
    handler: async (_request, reply) => {
      const { repositories, logger } = deps;
      try {
        const useCase = new FindAllArticleUseCase(repositories.articleRepository);
        const articles = await useCase.execute();

        if (articles.length === 0 || !articles) {
          return reply.status(204).send();
        }
        return reply.status(200).send(articles);
      } catch (error) {
        logger.error({ error }, 'Error fetching articles');
        return reply.status(500).send({ message: 'Internal server error', statusCode: 500 });
      }
    },
  });

  fastify.route<{ Params: { id: string } }>({
    method: 'GET',
    url: '/api/v1/articles/:id',
    schema: {
      summary: 'Find article by ID',
      tags: ['articles'],
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string' },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            price: { type: 'number' },
            userId: { type: 'string' },
            createdAt: { type: 'string' },
            updatedAt: { type: ['string', 'null'] },
            isPublished: { type: 'boolean' },
            images: { type: 'array', items: { type: 'object' } },
            categories: { type: 'array', items: { type: 'object' } },
          },
        },
        204: {
          description: 'No article found',
        },
        404: { $ref: 'ErrorResponse#' },
        500: { $ref: 'ErrorResponse#' },
      },
    },
    handler: async (request, reply) => {
      const { repositories, logger } = deps;
      try {
        const useCase = new FindArticleByIdUseCase(repositories.articleRepository);
        const article = await useCase.execute(request.params.id);
        if (!article) {
          return reply.status(204).send();
        }
        return reply.status(200).send(article);
      } catch (error) {
        logger.error({ error }, 'Error fetching article by ID');
        return reply.status(500).send({ message: 'Internal server error', statusCode: 500 });
      }
    },
  });

  fastify.route<{ Querystring: { page: number; limit: number; search?: string } }>({
    method: 'GET',
    url: '/api/v1/articles/getPaginated',
    schema: {
      summary: 'Get paginated articles',
      tags: ['articles'],
      querystring: {
        type: 'object',
        properties: {
          page: { type: 'number', minimum: 1, default: 1 },
          limit: { type: 'number', minimum: 1, maximum: 100, default: 10 },
          search: { type: 'string' },
        },
      },
      response: {
        200: {
          type: 'object',
          required: ['items', 'page', 'limit', 'total', 'totalPages'],
          properties: {
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  price: { type: 'number' },
                  userId: { type: 'string' },
                  createdAt: { type: 'string' },
                  updatedAt: { type: ['string', 'null'] },
                  isPublished: { type: 'boolean' },
                  images: { type: 'array', items: { type: 'object' } },
                  categories: { type: 'array', items: { type: 'object' } },
                },
              },
            },
            page: { type: 'number' },
            limit: { type: 'number' },
            total: { type: 'number' },
            totalPages: { type: 'number' },
          },
        },
        500: { $ref: 'ErrorResponse#' },
      },
    },
    handler: async (request, reply) => {
      const { repositories, logger } = deps;
      const page = Number(request.query.page) || 1;
      const limit = Number(request.query.limit) || 10;
      const search = request.query.search;

      try {
        const useCase = new PaginatedArticleUseCase(repositories.articleRepository);
        const paginatedArticles = await useCase.execute(page, limit, search);

        return reply.status(200).send(paginatedArticles);
      } catch (error) {
        logger.error({ error }, 'Error fetching paginated articles');
        return reply.status(500).send({ message: 'Internal server error', statusCode: 500 });
      }
    },
  });
}
