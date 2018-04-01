const express = require('express');
const app = express(); // creates an instance of an express application
const router = require('./routes');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');


const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Middleware
app.use(volleyball);

// Routes
app.use(jsonParser);
app.use(urlencodedParser);
app.use(router);

// have error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  req.status(err.status || 500).send(err.message || 'Internal Error');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

