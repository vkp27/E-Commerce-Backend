const errorHandler = (err, req, res, next) => {
    // Default error status and message
    let status = 500;
    let message = 'Internal Server Error';
  
    // Check for specific error types and customize the response
    if (err.name === 'ValidationError') {
      status = 400;
      message = err.message;
    } else if (err.name === 'CastError') {
      status = 400;
      message = 'Invalid ID';
    } else if (err.name === 'MongoError' && err.code === 11000) {
      status = 400;
      message = 'Duplicate key error';
    }
  
    res.status(status).json({ error: message });
  };
  
  module.exports = errorHandler;
  