import type { Article } from "@domain/entities/articles/articleEntities";

export interface ArticleRepository {
  create(article: Article): Promise<void>;
  findByPagination(page: number, limit: number): Promise<Article[]>;
  findById(id: string): Promise<Article | null>;
  findAll(): Promise<Article[]>;
  update(article: Article): Promise<void>;
  delete(id: string): Promise<void>;
  deleteAll(): Promise<void>;
}
