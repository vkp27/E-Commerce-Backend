const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  let createdUserId;

  // Create a new user
  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'test123',
        address: '123 Test Street',
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test User');
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.address).toBe('123 Test Street');

    createdUserId = response.body._id;
  });

  // Retrieve a list of all users
  it('should retrieve a list of all users', async () => {
    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Retrieve details of a specific user
  it('should retrieve details of a specific user', async () => {
    const response = await request(app).get(`/api/users/${createdUserId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(createdUserId);
  });

  // Update the details of an existing user
  it('should update the details of an existing user', async () => {
    const response = await request(app)
      .put(`/api/users/${createdUserId}`)
      .send({
        name: 'Updated User',
        email: 'updated@example.com',
        password: 'updated123',
        address: '456 Updated Street',
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated User');
    expect(response.body.email).toBe('updated@example.com');
    expect(response.body.address).toBe('456 Updated Street');
  });

  // Delete a user
  it('should delete a user', async () => {
    const response = await request(app).delete(`/api/users/${createdUserId}`);

    expect(response.status).toBe(204);
  });
});
