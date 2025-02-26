const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends BaseError {
  constructor(role, url) {
    super(
      'Forbidden',
      StatusCodes.FORBIDDEN,
      `User with role ${role} is forbidden to access site ${url}`,
      {
        userRole: role,
        url: url,
      }
    );
  }
}

module.exports = Forbidden;
