const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
  constructor(resource, resource_type) {
    super(
      'NOT Found',
      StatusCodes.NOT_FOUND,
      `Can not find resource ${resource} for ${resource_type}`,
      {
        resource,
      }
    );
  }
}

module.exports = NotFound;
