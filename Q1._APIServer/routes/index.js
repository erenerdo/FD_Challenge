const express = require('express');
const router = express.Router();

const nba = require('./nba');

router.get('/', function (req, res, next) {
  res.json('Welcome to the homepage');
});

// Send all /nba routes to nba.js router
router.use('/nba', nba);

module.exports = router;
