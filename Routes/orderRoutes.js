const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Order = require('../Models/Order');

// Create a new order
router.post(
  '/orders',
  [
    body('user').notEmpty().withMessage('User ID is required'),
    body('products').notEmpty().withMessage('Products array is required').isArray().withMessage('Products must be an array'),
    body('products.*.product').notEmpty().withMessage('Product ID is required'),
    body('products.*.quantity').notEmpty().withMessage('Quantity is required').isInt({ min: 1 }).withMessage('Quantity must be a positive integer'),
    body('totalPrice').notEmpty().withMessage('Total price is required').isNumeric().withMessage('Total price must be a number'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  }
);

// Retrieve a list of all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('products.product', 'name price');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Retrieve details of a specific order by its ID
router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email').populate('products.product', 'name price');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// Update the details of an existing order
router.put('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order' });
  }
});

// Delete an order from the system
router.delete('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndRemove(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete order' });
  }
});

module.exports = router;
