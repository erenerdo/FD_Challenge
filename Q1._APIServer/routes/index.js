const express = require('express');
const router = express.Router();

const nba = require('./nba');

router.get('/', function (req, res, next) {
  res.json('test index');
});

router.use('/nba', nba);

module.exports = router;
