const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/ping', (req, res) => {
  return res.json({
    msg: 'Problem Service is alive',
  });
});

app.listen(PORT, (req, res) => {
  console.log('Application is listening at PORT ', PORT);
});
