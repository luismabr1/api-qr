const bodyParser = require('body-parser');
// Import builtin NodeJS modules to instantiate the service
const express = require('express');
const app = express();
const routes = require('./routes')

const cors = require('cors');
app.use(cors({ origin: true }));

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(bodyParser.json());

// Routes
app.use(routes);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});