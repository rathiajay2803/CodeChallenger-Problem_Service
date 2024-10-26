const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRoutes = require('./routes');
const BaseError = require('./errors/base.error');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/ping', (req, res) => {
  return res.json({
    msg: 'Problem Service is alive',
  });
});

app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log('Application is listening at PORT ', PORT);
});
