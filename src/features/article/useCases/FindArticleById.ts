import type { ArticleDto } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

export class FindArticleByIdUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(articleId: string): Promise<ArticleDto | null> {
    const article = await this.articleRepository.findById(articleId);
    return article;
  }
}
