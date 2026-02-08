import type { ArticleDto } from '@domain/entities/articles/articleEntities';
import type { UseCaseDependencies } from '@infrastructure/di';
import { z } from 'zod';
import { CreateArticleUseCase } from '../useCases/CreateArticleUseCase';

const paramsSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(5000),
  price: z.number().min(0),
  userId: z.string(),
  categories: z.array(z.string()).optional(),
});

export type CreateArticleParams = z.infer<typeof paramsSchema>;
export type CreateArticleResult = { type: 'success'; article: ArticleDto } | { type: 'error' };
export default async function createArticle(
  params: CreateArticleParams,
  { logger, repositories }: UseCaseDependencies,
): Promise<CreateArticleResult> {
  logger.info('Creating article');
  const validated = paramsSchema.parse(params);
  try {
    const createArticleUseCase = new CreateArticleUseCase(repositories.articleRepository);
    const article = await createArticleUseCase.execute({
      title: validated.title,
      description: validated.description,
      price: validated.price,
      userId: validated.userId,
      // TODO : handle images and categories properly
    });

    logger.info({ id: article.id }, 'Article created');
    return { type: 'success', article };
  } catch (error) {
    logger.error({ error }, 'Error creating article');
    return { type: 'error' };
  }
}
