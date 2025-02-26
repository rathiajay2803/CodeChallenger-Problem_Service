const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDb() {
  try {
    if (NODE_ENV == 'development') {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log('Unable to connect to mongo atlas');
    console.log(error);
  }
}

module.exports = connectToDb;
