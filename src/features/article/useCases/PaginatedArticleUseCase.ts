import type { ArticleDto } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

export type PaginatedArticlesDto = {
  items: ArticleDto[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export class PaginatedArticleUseCase {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async execute(page: number, limit: number, search?: string): Promise<PaginatedArticlesDto> {
    const [items, total] = await Promise.all([
      this.articleRepository.findByPagination(page, limit, search),
      this.articleRepository.countPublished(search),
    ]);

    const totalPages = total === 0 ? 0 : Math.ceil(total / limit);

    return {
      items,
      page,
      limit,
      total,
      totalPages,
    };
  }
}
