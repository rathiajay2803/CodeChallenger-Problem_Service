const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
  constructor(resource) {
    super(
      'NOT Found',
      StatusCodes.NOT_FOUND,
      `Can not find resource ${resource}`,
      {
        resource,
      }
    );
  }
}

module.exports = NotFound;
