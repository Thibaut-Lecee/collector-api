import { type Agent, closeTestServer, getTestClient } from '../helpers/fastify';

describe('Articles API', () => {
  let client: Agent;

  beforeAll(async () => {
    client = await getTestClient();
  });

  afterAll(async () => {
    await closeTestServer();
  });

  const apiURL = '/api/v1/articles';

  const clearArticles = async (): Promise<void> => {
    const response = await client.delete(`${apiURL}/clearAll`).send();
    expect(response.status).toBe(200);
  };

  beforeEach(async () => {
    await clearArticles();
  });

  // récupérer un utilisateur existant pour de zitadel userId
  const newArticle = {
    title: 'Cas de test pour écouteurs sans fil',
    description: 'Un article détaillant les caractéristiques et avantages des écouteurs sans fil.',
    price: 149.99,
    userId: '357102073475039235', // UserId admin zitadel mais peut être changé selon les besoins
  };

  describe('GET /api/v1/articles/findAll', () => {
    it('should return a list of articles', async () => {
      const created = await client.post(apiURL).send(newArticle);
      expect(created.status).toBe(201);

      const response = await client.get(`${apiURL}/findAll`).send();
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/v1/articles/getPaginated', () => {
    it('should return paginated articles', async () => {
      const created = await client.post(apiURL).send(newArticle);
      expect(created.status).toBe(201);

      const response = await client.get(`${apiURL}/getPaginated`).query({ page: 1, limit: 10 }).send();
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /api/v1/articles', () => {
    it('should create a new article', async () => {
      const response = await client.post(apiURL).send(newArticle);
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject({
        title: newArticle.title,
        description: newArticle.description,
        price: newArticle.price,
        userId: newArticle.userId,
        isPublished: true,
        images: [],
        categories: [],
      });
      expect(response.body.id).toBeTypeOf('string');
    });
  });
});
