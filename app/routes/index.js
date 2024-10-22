const express = require('express');
const v1Router = require('./v1');
const apiRoutes = express.Router();

apiRoutes.use('/v1', v1Router);

module.exports = apiRoutes;
