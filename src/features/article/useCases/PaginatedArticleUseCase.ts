import type { ArticleDto } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

export class PaginatedArticleUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(page: number, limit: number): Promise<ArticleDto[]> {
    const article = await this.articleRepository.findByPagination(page, limit);
    return article;
  }
}
