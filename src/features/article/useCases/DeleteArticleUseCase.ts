import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

export class DeleteArticleUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(articleId: string): Promise<void> {
    const existingArticle = await this.articleRepository.findById(articleId);
    if (!existingArticle) {
      throw new Error('Article not found');
    }

    await this.articleRepository.delete(articleId);
  }
}
