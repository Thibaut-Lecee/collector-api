import { Article, type ArticleDto } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';

type UpdateArticleParams = {
  id: string;
  title?: string;
  description?: string;
  price?: number;
  isPublished?: boolean;
};

export class UpdateArticleUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(params: UpdateArticleParams): Promise<ArticleDto | null> {
    const existingArticle = await this.articleRepository.findById(params.id);
    if (!existingArticle) {
      return null;
    }

    let updated: Article = existingArticle;

    if (params.title !== undefined) {
      updated = updated.renameArticle({
        title: params.title,
        existingArticle: updated,
      });
    }

    if (params.description !== undefined) {
      updated = updated.changeDescription({
        description: params.description,
        existingArticle: updated,
      });
    }

    if (params.price !== undefined) {
      updated = updated.changePrice({
        price: params.price,
        existingArticle: updated,
      });
    }

    if (params.isPublished === true) {
      updated = updated.logicalRestoreArticle({ existingArticle: updated });
    }

    if (params.isPublished === false) {
      updated = updated.logicalDeleteArticle({ existingArticle: updated });
    }

    await this.articleRepository.update(updated);
    return Article.toDto(updated);
  }
}
