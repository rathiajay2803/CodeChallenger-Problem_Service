const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  ATLAS_DB_URL: process.env.ATLAS_DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  DB_LOG_URL: process.env.DB_LOG_URL,
};
