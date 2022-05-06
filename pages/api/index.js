const bodyParser = require('body-parser');
// Import builtin NodeJS modules to instantiate the service
const express = require('express');
const app = express();
const routes = require('./routes')
const { MYSQL_PORT } = require('../../config');

const cors = require('cors');
app.use(cors({ origin: true }));

// Settings
app.set('port', MYSQL_PORT);

// Middlewares
app.use(bodyParser.json());

// Routes
app.use(routes);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});