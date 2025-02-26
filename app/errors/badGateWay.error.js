const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadGateway extends BaseError {
  constructor(UpstreamServer, cause) {
    super(
      'Bad Gateway',
      StatusCodes.BAD_GATEWAY,
      `Invalid Response from upstream Server ${ServerName}`,
      {
        cause,
      }
    );
  }
}

module.exports = BadGateway;
