const express = require('express');
const router = express.Router();

const gameData = require('../gameData');
const gameStateData = require('../gameStateData');

router.get('/', (req, res, next) => {
  const date = req.query.date;

  // Check if date passed in as query string
  if (date === undefined) {
    // if not, return all games
    res.json(getGamesWithScores());
  }
  else {
    // if so, return all games from date
    res.json(getGamesFromDate(date));
  }
});

router.get('/:id', (req, res, next) => {
  const gameId = +req.params.id;
  // return games with the scores for the specified gameId
  res.json(getGamesWithScores()[gameId - 1]);
});

// Helper function that iterates through all games, and only return games from specified date input
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

// adds score to all of the games
function getGamesWithScores() {

  for (let i = 0; i < gameData.length; i++) {
    gameData[i].score = gameStateData[i];
  }

  return gameData;
}

module.exports = router;
