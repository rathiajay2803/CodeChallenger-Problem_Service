class BaseError extends Error {
  constructor(name, statusCode, message, details) {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;

    // Error.captureStackTrace(this);
    // console.log('Printing Stack Trace', this.stack);
  }
}

module.exports = BaseError;
