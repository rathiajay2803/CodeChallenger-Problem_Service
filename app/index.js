const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apiRoutes = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDb = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.get('/ping', (req, res) => {
  return res.json({
    msg: 'Problem Service is alive',
  });
});

//last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async (req, res) => {
  console.log('Application is listening at PORT ', PORT);
  await connectToDb();
  console.log('Db is connected');
});
