const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class PaymentRequired extends BaseError {
  constructor(ServiceName) {
    super(
      'Payment Required',
      StatusCodes.PAYMENT_REQUIRED,
      `Please buy the premioum to access the ${ServiceName}`,
      {
        cause,
      }
    );
  }
}

module.exports = PaymentRequired;
