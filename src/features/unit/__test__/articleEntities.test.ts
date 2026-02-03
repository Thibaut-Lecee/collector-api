import { Article } from '@domain/entities/articles/articleEntities';

describe('Article entity', () => {
  const baseParams = {
    id: 'article-1',
    title: 'Sample title',
    description: 'Sample description',
    price: 42,
    userId: 'user-1',
  };

  it('creates an article with defaults', () => {
    const article = Article.create(baseParams);

    expect(article.id).toBe(baseParams.id);
    expect(article.title).toBe(baseParams.title);
    expect(article.description).toBe(baseParams.description);
    expect(article.price).toBe(baseParams.price);
    expect(article.userId).toBe(baseParams.userId);
    expect(article.isPublished).toBe(true);
    expect(article.updatedAt).toBeNull();
    expect(article.images).toEqual([]);
    expect(article.categories).toEqual([]);
    expect(article.createdAt).toBeInstanceOf(Date);
  });

  it('rejects empty title on create', () => {
    expect(() =>
      Article.create({
        ...baseParams,
        title: '   ',
      }),
    ).toThrow('Title cannot be empty');
  });

  it('rejects negative price on create', () => {
    expect(() =>
      Article.create({
        ...baseParams,
        price: -10,
      }),
    ).toThrow('Price cannot be negative');
  });

  it('renames an article and updates updatedAt', () => {
    const createdAt = new Date('2024-01-01T00:00:00.000Z');
    const existing = Article.restore({
      ...baseParams,
      createdAt,
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

    const renamed = existing.renameArticle({
      title: 'New title',
      existingArticle: existing,
    });

    expect(renamed.title).toBe('New title');
    expect(renamed.createdAt).toBe(createdAt);
    expect(renamed.updatedAt).toBeInstanceOf(Date);
  });

  it('rejects empty title on rename', () => {
    const existing = Article.restore({
      ...baseParams,
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

    expect(() =>
      existing.renameArticle({
        title: '',
        existingArticle: existing,
      }),
    ).toThrow('Title cannot be empty');
  });

  it('changes price with validation', () => {
    const existing = Article.restore({
      ...baseParams,
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

    const updated = existing.changePrice({
      price: 99,
      existingArticle: existing,
    });

    expect(updated.price).toBe(99);
    expect(updated.updatedAt).toBeInstanceOf(Date);
  });

  it('rejects negative price on changePrice', () => {
    const existing = Article.restore({
      ...baseParams,
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

    expect(() =>
      existing.changePrice({
        price: -1,
        existingArticle: existing,
      }),
    ).toThrow('Price cannot be negative');
  });

  it('changes description', () => {
    const existing = Article.restore({
      ...baseParams,
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

    const updated = existing.changeDescription({
      description: 'Updated description',
      existingArticle: existing,
    });

    expect(updated.description).toBe('Updated description');
    expect(updated.updatedAt).toBeInstanceOf(Date);
  });

  it('toggles publication with logical delete/restore', () => {
    const existing = Article.restore({
      ...baseParams,
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

    const deleted = existing.logicalDeleteArticle({ existingArticle: existing });
    expect(deleted.isPublished).toBe(false);
    expect(deleted.updatedAt).toBeInstanceOf(Date);

    const restored = deleted.logicalRestoreArticle({ existingArticle: deleted });
    expect(restored.isPublished).toBe(true);
    expect(restored.updatedAt).toBeInstanceOf(Date);
  });

  it('converts to DTO', () => {
    const createdAt = new Date('2024-01-01T00:00:00.000Z');
    const updatedAt = new Date('2024-01-02T00:00:00.000Z');
    const existing = Article.restore({
      ...baseParams,
      createdAt,
      updatedAt,
      isPublished: false,
      images: [],
      categories: [],
    });

    const dto = Article.toDto(existing);

    expect(dto).toEqual({
      id: existing.id,
      title: existing.title,
      description: existing.description,
      price: existing.price,
      userId: existing.userId,
      createdAt,
      updatedAt,
      isPublished: existing.isPublished,
      images: existing.images,
      categories: existing.categories,
    });
  });
});
