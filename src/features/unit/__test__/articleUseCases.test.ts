import { Article } from '@domain/entities/articles/articleEntities';
import type { ArticleRepository } from '@domain/repositories/article/ArticleRepository';
import { CreateArticleUseCase } from 'src/features/article/useCases/CreateArticleUseCase';
import { DeleteArticleUseCase } from 'src/features/article/useCases/DeleteArticleUseCase';
import { FindAllArticleUseCase } from 'src/features/article/useCases/FindAllArticleUseCase';
import { FindArticleByIdUseCase } from 'src/features/article/useCases/FindArticleById';
import { LogicalDeleteArticleUseCase } from 'src/features/article/useCases/LogicalDeleteArticleUseCase';
import { PaginatedArticleUseCase } from 'src/features/article/useCases/PaginatedArticleUseCase';
import { UpdateArticleUseCase } from 'src/features/article/useCases/UpdateArticleUseCase';
import { type DeepMockProxy, mockDeep } from 'vitest-mock-extended';

describe('Article use cases', () => {
  let repository: DeepMockProxy<ArticleRepository>;

  const baseArticle = () =>
    Article.restore({
      id: 'article-1',
      title: 'Old title',
      description: 'Old description',
      price: 10,
      userId: 'user-1',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: true,
      images: [],
      categories: [],
    });

  beforeEach(() => {
    repository = mockDeep<ArticleRepository>();
  });

  it('CreateArticleUseCase should persist and return article dto', async () => {
    const useCase = new CreateArticleUseCase(repository);
    let createdArticle: Article | undefined;

    repository.create.mockImplementation(async (article) => {
      createdArticle = article;
    });

    const result = await useCase.execute({
      title: 'New title',
      description: 'New description',
      price: 25,
      userId: 'user-1',
    });

    expect(repository.create).toHaveBeenCalledTimes(1);
    expect(createdArticle).toBeDefined();
    if (!createdArticle) {
      throw new Error('Expected created article to be defined');
    }
    expect(result).toEqual(Article.toDto(createdArticle));
    expect(createdArticle.description).toBe('New description');
    expect(createdArticle.userId).toBe('user-1');
    expect(createdArticle.isPublished).toBe(true);
    expect(createdArticle.images).toEqual([]);
    expect(createdArticle.categories).toEqual([]);
  });

  it('UpdateArticleUseCase should return null when article not found', async () => {
    const useCase = new UpdateArticleUseCase(repository);
    repository.findById.mockResolvedValue(null);

    const result = await useCase.execute({ id: 'missing', title: 'New title' });

    expect(result).toBeNull();
    expect(repository.update).not.toHaveBeenCalled();
  });

  it('UpdateArticleUseCase should update fields and unpublish', async () => {
    const useCase = new UpdateArticleUseCase(repository);
    const existing = baseArticle();
    repository.findById.mockResolvedValue(existing);

    const result = await useCase.execute({
      id: existing.id,
      title: 'Updated title',
      description: 'Updated description',
      price: 50,
      isPublished: false,
    });

    expect(repository.update).toHaveBeenCalledTimes(1);
    const updatedArticle = repository.update.mock.calls[0][0];

    expect(updatedArticle.title).toBe('Updated title');
    expect(updatedArticle.description).toBe('Updated description');
    expect(updatedArticle.price).toBe(50);
    expect(updatedArticle.isPublished).toBe(false);
    expect(updatedArticle.updatedAt).toBeInstanceOf(Date);
    expect(result).toEqual(Article.toDto(updatedArticle));
  });

  it('UpdateArticleUseCase should restore when isPublished is true', async () => {
    const useCase = new UpdateArticleUseCase(repository);
    const existing = Article.restore({
      id: 'article-2',
      title: 'Hidden',
      description: 'Hidden description',
      price: 10,
      userId: 'user-1',
      createdAt: new Date('2024-01-01T00:00:00.000Z'),
      updatedAt: null,
      isPublished: false,
      images: [],
      categories: [],
    });
    repository.findById.mockResolvedValue(existing);

    await useCase.execute({ id: existing.id, isPublished: true });

    const updatedArticle = repository.update.mock.calls[0][0];
    expect(updatedArticle.isPublished).toBe(true);
  });

  it('DeleteArticleUseCase should delete when article exists', async () => {
    const useCase = new DeleteArticleUseCase(repository);
    const existing = baseArticle();
    repository.findById.mockResolvedValue(existing);

    await useCase.execute(existing.id);

    expect(repository.delete).toHaveBeenCalledWith(existing.id);
  });

  it('DeleteArticleUseCase should throw when article does not exist', async () => {
    const useCase = new DeleteArticleUseCase(repository);
    repository.findById.mockResolvedValue(null);

    await expect(useCase.execute('missing')).rejects.toThrow('Article not found');
    expect(repository.delete).not.toHaveBeenCalled();
  });

  it('LogicalDeleteArticleUseCase should unpublish article', async () => {
    const useCase = new LogicalDeleteArticleUseCase(repository);
    const existing = baseArticle();
    repository.findById.mockResolvedValue(existing);

    await useCase.execute(existing.id);

    expect(repository.update).toHaveBeenCalledTimes(1);
    const updatedArticle = repository.update.mock.calls[0][0];
    expect(updatedArticle.isPublished).toBe(false);
  });

  it('FindAllArticleUseCase should return all articles', async () => {
    const useCase = new FindAllArticleUseCase(repository);
    const articles = [baseArticle()];
    repository.findAll.mockResolvedValue(articles);

    const result = await useCase.execute();

    expect(result).toEqual(articles);
  });

  it('FindArticleByIdUseCase should return article by id', async () => {
    const useCase = new FindArticleByIdUseCase(repository);
    const article = baseArticle();
    repository.findById.mockResolvedValue(article);

    const result = await useCase.execute(article.id);

    expect(repository.findById).toHaveBeenCalledWith(article.id);
    expect(result).toBe(article);
  });

  it('PaginatedArticleUseCase should return paginated articles', async () => {
    const useCase = new PaginatedArticleUseCase(repository);
    const articles = [baseArticle()];
    repository.findByPagination.mockResolvedValue(articles);
    repository.countPublished.mockResolvedValue(12);

    const result = await useCase.execute(2, 5);

    expect(repository.findByPagination).toHaveBeenCalledWith(2, 5, undefined);
    expect(repository.countPublished).toHaveBeenCalledWith(undefined);
    expect(result).toEqual({
      items: articles,
      page: 2,
      limit: 5,
      total: 12,
      totalPages: 3,
    });
  });
});
