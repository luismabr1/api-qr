const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));

// Settings
app.set('port', process.env.PORT || 3002);

// Middlewares
app.use(bodyParser.json());

// Routes
app.use(require('./routes'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});