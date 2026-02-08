import { type Agent, closeTestServer, getTestClient } from '../helpers/fastify';

describe('Metrics Endpoint', () => {
  let client: Agent;

  beforeAll(async () => {
    client = await getTestClient();
  });

  afterAll(async () => {
    await closeTestServer();
  });

  describe('GET /metrics', () => {
    it('should expose Prometheus metrics', async () => {
      await client.get('/health');

      const response = await client.get('/metrics');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('text/plain');
      expect(response.text).toContain('http_requests_total');
      expect(response.text).toContain('http_request_duration_seconds');
      expect(response.text).toContain('route="/health"');
    });
  });
});
