const express = require('express');
const router = express.Router();
const playerData = require('../playerData');
const playerStats = require('../playerStats');
const gameData = require('../gameData');

router.get('/', (req, res, next) => {
  const date = req.query.date;

  // Check if date passed in as query string
  if (date === undefined) {
    // if not, return all players
    res.json(playerData);
  }
  else {
    // if so, return all games from date
    res.json(getPlayersFromDate(date));
  }
});

router.get('/:id/stats', (req, res, next) => {
  const playerId = +req.params.id;
  const stats = [];

  // Iterate through all stats, only returning stats from specific player id
  for (let stat of playerStats) {
    if (stat.player_id === playerId) {
      stats.push(stat);
    }
  }
  res.json(stats);
});

router.get('/:id', (req, res, next) => {
  const playerId = +req.params.id;

  // Return specific player from playerId
  res.json(playerData[playerId - 1]);
});

// Helper functions

// get all players who played on a specific date
function getPlayersFromDate (date) {
  const games = getGamesFromDate(date);
  const teams = getTeamsFromGames(games);
  return getPlayersFromTeamIds(teams);
}

// gets all players from a specific team
function getPlayersFromTeamIds (teams) {
  const teamIdSet = new Set(teams);
  const players = [];

  for (let player of playerData) {
    if (teamIdSet.has(player.team_id)) {
      players.push(player);
    }
  }
  return players;
}

// get all games from a specific date
function getGamesFromDate (date) {
  const games = [];

  for (let game of gameData) {
    if (game.date === date) {
      games.push(game);
    }
  }
  return games;
}

// gets both teams from a specific game
function getTeamsFromGames(games) {
  let teams = [];

  for (let game of games) {
    teams.push(game.home_team_id);
    teams.push(game.away_team_id);
  }

  return teams;
}

module.exports = router;
