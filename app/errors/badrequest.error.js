const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      'Bad Request',
      StatusCodes.BAD_REQUEST,
      `${propertyName} value is incorrect in request`,
      details
    );
  }
}

module.exports = BadRequest;
