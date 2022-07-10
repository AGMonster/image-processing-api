import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
describe('Test endpoint response', async () => {
  it('get the api/images endpoint', async () => {
    const response = await request.get(
      '/api/images?fileName=fjord&width=400&height=600'
    );
    expect(response.status).toBe(200);
  });
});
