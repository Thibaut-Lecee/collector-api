export class Article {
  private constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly price: number,
    public readonly user: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date | null,
    public readonly isPublished: boolean,
    public readonly images: ArticleImage[],
    public readonly categories: ArticleCategory[],
  ) {}
  static create(params: {
    id: string;
    title: string;
    description: string;
    price: number;
    userId: string;
    images?: ArticleImage[];
    categories?: ArticleCategory[];
  }): Article {
    if (params.price < 0) {
      throw new Error("Price cannot be negative");
    }
    if (!params.title.trim()) {
      throw new Error("Title cannot be empty");
    }

    return new Article(
      params.id,
      params.title,
      params.description,
      params.price,
      params.userId,
      new Date(),
      null,
      true,
      params.images ?? [],
      params.categories ?? [],
    );
  }
  static restore(params: {
    id: string;
    title: string;
    description: string;
    price: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date | null;
    isPublished: boolean;
    images: ArticleImage[];
    categories: ArticleCategory[];
  }): Article {
    if (params.price < 0) {
      throw new Error("Price cannot be negative");
    }
    if (!params.title.trim()) {
      throw new Error("Title cannot be empty");
    }

    return new Article(
      params.id,
      params.title,
      params.description,
      params.price,
      params.userId,
      params.createdAt,
      params.updatedAt,
      params.isPublished,
      params.images ?? [],
      params.categories ?? [],
    );
  }

  renameArticle(params: { title: string; existingArticle: Article }): Article {
    if (!params.title.trim()) {
      throw new Error("Title cannot be empty");
    }
    return new Article(
      params.existingArticle.id,
      params.title,
      params.existingArticle.description,
      params.existingArticle.price,
      params.existingArticle.user,
      params.existingArticle.createdAt,
      new Date(),
      params.existingArticle.isPublished,
      params.existingArticle.images,
      params.existingArticle.categories,
    );
  }
  changePrice(params: { price: number; existingArticle: Article }): Article {
    if (params.price < 0) {
      throw new Error("Price cannot be negative");
    }
    return new Article(
      params.existingArticle.id,
      params.existingArticle.title,
      params.existingArticle.description,
      params.price,
      params.existingArticle.user,
      params.existingArticle.createdAt,
      new Date(),
      params.existingArticle.isPublished,
      params.existingArticle.images,
      params.existingArticle.categories,
    );
  }
  changeDescription(params: {
    description: string;
    existingArticle: Article;
  }): Article {
    return new Article(
      params.existingArticle.id,
      params.existingArticle.title,
      params.description,
      params.existingArticle.price,
      params.existingArticle.user,
      params.existingArticle.createdAt,
      new Date(),
      params.existingArticle.isPublished,
      params.existingArticle.images,
      params.existingArticle.categories,
    );
  }

  logicalRestoreArticle(params: { existingArticle: Article }): Article {
    return new Article(
      params.existingArticle.id,
      params.existingArticle.title,
      params.existingArticle.description,
      params.existingArticle.price,
      params.existingArticle.user,
      params.existingArticle.createdAt,
      new Date(),
      true,
      params.existingArticle.images,
      params.existingArticle.categories,
    );
  }

  logicalDeleteArticle(params: { existingArticle: Article }): Article {
    return new Article(
      params.existingArticle.id,
      params.existingArticle.title,
      params.existingArticle.description,
      params.existingArticle.price,
      params.existingArticle.user,
      params.existingArticle.createdAt,
      new Date(),
      false,
      params.existingArticle.images,
      params.existingArticle.categories,
    );
  }
  static toDto(article: Article): ArticleDto {
    return {
      id: article.id,
      title: article.title,
      description: article.description,
      price: article.price,
      userId: article.user,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
      isPublished: article.isPublished,
      images: article.images,
      categories: article.categories,
    };
  }
}

export class ArticleImage {
  private constructor(
    public readonly id: string,
    public readonly articleId: string,
    public readonly url: string,
  ) {}
}

export class ArticleCategory {
  private constructor(
    public readonly id: string,
    public readonly articleId: string,
    public readonly categoryId: string,
  ) {}
}

export class Category {
  private constructor(
    public readonly id: string,
    public readonly name: string,
  ) {}
}
export type ArticleDto = {
  id: string;
  title: string;
  description?: string;
  price: number;
  // return user instead of just userId in future
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  isPublished?: boolean;
  images?: ArticleImage[];
  categories?: ArticleCategory[];
};
