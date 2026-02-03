import type { ArticleDto } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

export class FindAllArticleUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(): Promise<ArticleDto[]> {
    const articles = await this.articleRepository.findAll();
    return articles;
  }
}
