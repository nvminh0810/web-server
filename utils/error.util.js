const throwError = (message, statusCode, next) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return next(error);
};

module.exports = {
  throwError,
};
