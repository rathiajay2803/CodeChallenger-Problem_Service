const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Unauthorized extends BaseError {
  constructor(action, resource) {
    super(
      'Unauthorized',
      StatusCodes.UNAUTHORIZED,
      `User is unauthorized to do ${action}`,
      {
        action,
        resource,
      }
    );
  }
}

module.exports = Unauthorized;
