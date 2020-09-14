class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { message } = err;
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

module.exports = {
  ErrorHandler,
  handleError
};
