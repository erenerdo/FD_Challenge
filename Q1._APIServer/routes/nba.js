const express = require('express');
const router = express.Router();

const teams = require('./teams');
const games = require('./games');
const players = require('./players');


router.use('/teams', teams);
router.use('/games', games);
router.use('/players', players);


module.exports = router;
