import { Article } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';
import { Prisma, type PrismaClient } from '@prisma/client';

export class PrismaRepositoryError extends Error {
  constructor(
    public readonly kind: 'duplicate' | 'not_found' | 'foreign_key' | 'persistence',
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = 'PrismaRepositoryError';
  }
}

export class PrismaArticleRepository implements ArticleRepository {
  constructor(private readonly prisma: PrismaClient) {}

  private mapPrismaError(error: unknown): PrismaRepositoryError {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // https://www.prisma.io/docs/reference/api-reference/error-reference
      switch (error.code) {
        case 'P2002':
          return new PrismaRepositoryError('duplicate', 'Duplicate value constraint violated', error);
        case 'P2003':
          return new PrismaRepositoryError('foreign_key', 'Foreign key constraint failed', error);
        case 'P2025':
          return new PrismaRepositoryError('not_found', 'Record not found', error);
        default:
          return new PrismaRepositoryError('persistence', `Database request error (${error.code})`, error);
      }
    }

    if (error instanceof Prisma.PrismaClientInitializationError) {
      return new PrismaRepositoryError('persistence', 'Database initialization error', error);
    }

    if (error instanceof Prisma.PrismaClientRustPanicError) {
      return new PrismaRepositoryError('persistence', 'Database engine panic', error);
    }

    return new PrismaRepositoryError('persistence', 'Unknown database error', error);
  }

  // Find all articles with optional published filter
  async findAll(): Promise<Article[]> {
    const articles = await this.prisma.article.findMany({
      where: { isPublished: true },
    });

    return articles.map((record) =>
      Article.restore({
        id: record.id,
        title: record.title,
        description: record.description,
        price: record.price,
        userId: record.user,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
        isPublished: record.isPublished,
        images: [],
        categories: [],
      }),
    );
  }
  // find all articles only published with pagination
  async findByPagination(page: number, limit: number): Promise<Article[]> {
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: { isPublished: true },
    });
    return articles.map((record) =>
      Article.restore({
        id: record.id,
        title: record.title,
        description: record.description,
        price: record.price,
        userId: record.user,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
        isPublished: record.isPublished,
        images: [],
        categories: [],
      }),
    );
  }

  async update(article: Article): Promise<void> {
    try {
      await this.prisma.article.update({
        where: { id: article.id },
        data: {
          title: article.title,
          description: article.description,
          price: article.price,
          user: article.userId,
          isPublished: article.isPublished,
          updatedAt: new Date(),
        },
      });
    } catch (error) {
      throw this.mapPrismaError(error);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.article.delete({
        where: { id },
      });
    } catch (error) {
      throw this.mapPrismaError(error);
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await this.prisma.$transaction([
        this.prisma.articleCategories.deleteMany({}),
        this.prisma.articleImages.deleteMany({}),
        this.prisma.article.deleteMany({}),
      ]);
    } catch (error) {
      throw this.mapPrismaError(error);
    }
  }

  // Create a new article in the database
  // TODO : implement images and categories
  async create(article: Article): Promise<void> {
    try {
      await this.prisma.article.create({
        data: {
          id: article.id,
          title: article.title,
          description: article.description,
          price: article.price,
          user: article.userId,
          isPublished: article.isPublished,
        },
      });
    } catch (error) {
      throw this.mapPrismaError(error);
    }
  }

  async findById(id: string): Promise<Article | null> {
    const record = await this.prisma.article.findUnique({ where: { id } });
    if (!record) return null;
    return Article.restore({
      id: record.id,
      title: record.title,
      description: record.description,
      price: record.price,
      userId: record.user,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      isPublished: record.isPublished,
      images: [],
      categories: [],
    });
  }
}
