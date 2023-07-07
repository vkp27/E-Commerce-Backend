const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
  let createdProductId;

  // Create a new product
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 9.99,
        quantity: 10,
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Product');
    expect(response.body.description).toBe('This is a test product');
    expect(response.body.price).toBe(9.99);
    expect(response.body.quantity).toBe(10);

    createdProductId = response.body._id;
  });

  // Retrieve a list of all products
  it('should retrieve a list of all products', async () => {
    const response = await request(app).get('/api/products');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Retrieve details of a specific product
  it('should retrieve details of a specific product', async () => {
    const response = await request(app).get(`/api/products/${createdProductId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(createdProductId);
  });

  // Update the details of an existing product
  it('should update the details of an existing product', async () => {
    const response = await request(app)
      .put(`/api/products/${createdProductId}`)
      .send({
        name: 'Updated Product',
        description: 'This is an updated product',
        price: 19.99,
        quantity: 5,
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Updated Product');
    expect(response.body.description).toBe('This is an updated product');
    expect(response.body.price).toBe(19.99);
    expect(response.body.quantity).toBe(5);
  });

  // Delete a product
  it('should delete a product', async () => {
    const response = await request(app).delete(`/api/products/${createdProductId}`);

    expect(response.status).toBe(204);
  });
});
