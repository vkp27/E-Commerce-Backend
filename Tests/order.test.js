const request = require('supertest');
const app = require('../app');

describe('Order API', () => {
  let createdOrderId;

  // Create a new order
  it('should create a new order', async () => {
    const response = await request(app)
      .post('/api/orders')
      .send({
        user: 'userId123',
        products: [
          { product: 'productId123', quantity: 2 },
          { product: 'productId456', quantity: 3 },
        ],
        totalPrice: 50.99,
      });

    expect(response.status).toBe(201);
    expect(response.body.user).toBe('userId123');
    expect(response.body.products.length).toBe(2);
    expect(response.body.totalPrice).toBe(50.99);

    createdOrderId = response.body._id;
  });

  // Retrieve a list of all orders
  it('should retrieve a list of all orders', async () => {
    const response = await request(app).get('/api/orders');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Retrieve details of a specific order
  it('should retrieve details of a specific order', async () => {
    const response = await request(app).get(`/api/orders/${createdOrderId}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(createdOrderId);
  });

  // Update the details of an existing order
  it('should update the details of an existing order', async () => {
    const response = await request(app)
      .put(`/api/orders/${createdOrderId}`)
      .send({
        user: 'updatedUserId',
        products: [{ product: 'updatedProductId', quantity: 5 }],
        totalPrice: 100.99,
      });

    expect(response.status).toBe(200);
    expect(response.body.user).toBe('updatedUserId');
    expect(response.body.products.length).toBe(1);
    expect(response.body.totalPrice).toBe(100.99);
  });

  // Delete an order
  it('should delete an order', async () => {
    const response = await request(app).delete(`/api/orders/${createdOrderId}`);

    expect(response.status).toBe(204);
  });
});
