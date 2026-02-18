import type { Article } from '@domain/entities/articles/articleEntities';

export interface ArticleRepository {
  create(article: Article): Promise<void>;
  findByPagination(page: number, limit: number, search?: string): Promise<Article[]>;
  countPublished(search?: string): Promise<number>;
  findById(id: string): Promise<Article | null>;
  findAll(): Promise<Article[]>;
  update(article: Article): Promise<void>;
  delete(id: string): Promise<void>;
  deleteAll(): Promise<void>;
}
