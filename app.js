const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const errorHandler = require('./Middlewares/errorHandler');
const dotenv = require('dotenv')
const app = express();


//Config
dotenv.config();

// Middleware
app.use(express.json());


// Routes
app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', orderRoutes);

//Error Handler
app.use(errorHandler);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

  module.exports = app;