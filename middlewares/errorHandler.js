const errorHandler = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;

  // Duplicate unique key
  if (error.code === 11000) {
    error.statusCode = 400;
    Object.keys(error.keyValue).map((key) => {
      error.message = `${key} has to be unique`;
    });
  }

  // ObjectID: Not found
  if (error.kind === "ObjectId") {
    error.statusCode = 404;
    error.message = `The ${req.originalUrl} is not found because of wrong ID`;
  }

  // Validation
  if (error.errors) {
    error.statusCode = 400;
    error.message = [];
    Object.keys(error.errors).map((key) => {
      error.message.push(error.errors[key].properties.message);
    });
  }

  res.status(error.statusCode).json({
    message: error.message,
  });
};

module.exports = {
  errorHandler,
};
