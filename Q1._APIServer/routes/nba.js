const express = require('express');
const router = express.Router();

const teams = require('./teams');
const games = require('./games');
const players = require('./players');

// Send all /nba routes to teams.js router
router.use('/teams', teams);

// Send all /nba routes to games.js router
router.use('/games', games);

// Send all /nba routes to players.js router
router.use('/players', players);

module.exports = router;
