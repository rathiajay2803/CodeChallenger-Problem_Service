const winston = require('winston');
const { DB_LOG_URL } = require('./server.config');
require('winston-mongodb');
const path = require('path');
const BaseError = require('../errors/base.error');

const allowedTransport = [];
allowedTransport.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

// allowedTransport.push(
//   new winston.transports.MongoDB({
//     level: 'error',
//     db: DB_LOG_URL,
//     collection: 'loggers',
//   })
// );

allowedTransport.push(
  new winston.transports.File({
    filename: 'error.log',
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf(
        (log) =>
          `${log.timestamp} [${log.level}]: ${log.message} ${
            log.stack ? `\n${log.stack}` : ''
          }`
      ),
      winston.format.printf((logobj) => {
        let message;
        console.log('Hey there');
        console.log(logobj);
        console.log(logobj.message instanceof Error);
        if (logobj.message instanceof BaseError) {
          console.log('It is printing');
          message = `${logobj.message.message} ${logobj.message.stack}`;
        } else if (typeof logobj.message === 'object') {
          message = JSON.stringify(logobj.message);
        } else {
          message = logobj.message;
        }
        return `${logobj.timestamp} [${logobj.level}]: ${message}`;
      })
    ),
  })
);

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH-mm-ss',
    }),
    winston.format.printf((logobj) => {
      // let message;
      // if (logobj.message instanceof Error) {
      //   message = `${logobj.message.message} ${logobj.message.stack}`;
      // } else if (typeof logobj.message === 'object') {
      //   message = JSON.stringify(log.message);
      // } else {
      //   message = logobj.message;
      // }
      // return `${log.timestamp} [${log.level}]: ${message}`;
      return `${logobj.timestamp} [${logobj.level}]: ${message}`;
    })
  ),
  transports: allowedTransport,
});

module.exports = logger;
