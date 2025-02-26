const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class ServiceUnavailable extends BaseError {
  constructor(startTime, endTime) {
    super(
      'Service Unavailable',
      StatusCodes.SERVICE_UNAVAILABLE,
      `Site is under maintainence from ${startTime} to ${endTime}, Please try after that`,
      {}
    );
  }
}

module.exports = ServiceUnavailable;
