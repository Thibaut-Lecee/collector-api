import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

export class LogicalDeleteArticleUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(articleId: string): Promise<void> {
    const existingArticle = await this.articleRepository.findById(articleId);
    if (!existingArticle) {
      throw new Error('Article not found');
    }

    const logicallyDeletedArticle = existingArticle.logicalDeleteArticle({
      existingArticle,
    });
    await this.articleRepository.update(logicallyDeletedArticle);
  }
}
