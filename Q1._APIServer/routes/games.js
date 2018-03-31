const express = require('express');
const router = express.Router();

const gameData = require('../gameData');
const gameStateData = require('../gameStateData');

router.get('/', (req, res, next) => {
  const date = req.query.date;
  console.log(date);
  if (date === undefined) {
    res.json(getGamesWithScores());
  }
  else {
    console.log('hey');
    res.json(getGamesFromDate(date));
  }
});

router.get('/:id', (req, res, next) => {
  const gameId = req.params.id;
  res.json(getGamesWithScores()[gameId - 1]);
});

function getGamesFromDate(date) {
  const games = getGamesWithScores();
  const gamesOnDate = [];

  for (let game of games) {
    if (game.date === date) {
      gamesOnDate.push(game);
    }
  }

  return gamesOnDate;
}

function getGamesWithScores() {

  for (let i = 0; i < gameData.length; i++) {
    gameData[i].score = gameStateData[i];
  }

  return gameData;
}

module.exports = router;
