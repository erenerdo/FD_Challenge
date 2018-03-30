const express = require('express');
const router = express.Router();

const nba = require('./nba');


router.use('/nba', nba);

module.exports = router;
