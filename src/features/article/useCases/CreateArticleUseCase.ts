import { Article, type ArticleDto } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';
import { v4 as uuidv4 } from 'uuid';

type CreateArticleParams = {
  title: string;
  description: string;
  price: number;
  userId: string;
  images?: { id: string; articleId: string; url: string }[];
  categories?: { id: string; articleId: string; categoryId: string }[];
};

export class CreateArticleUseCase {
  constructor(private articleRepository: ArticleRepository) {}

  async execute(params: CreateArticleParams): Promise<ArticleDto> {
    const article = Article.create({
      id: uuidv4(),
      title: params.title,
      description: params.description,
      price: params.price,
      userId: params.userId,
      images: params.images ?? [],
      categories: params.categories ?? [],
    });

    await this.articleRepository.create(article);
    return Article.toDto(article);
  }
}
