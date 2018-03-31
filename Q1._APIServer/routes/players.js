const express = require('express');
const router = express.Router();
const playerData = require('../playerData');
const playerStats = require('../playerStats');
const gameData = require('../gameData');

router.get('/', (req, res, next) => {
  const date = req.query.date;
  if (date === undefined) res.json(playerData);
  else res.json(getPlayersFromDate(date));
});

router.get('/:id/stats', (req, res, next) => {
  const playerId = +req.params.id;
  const stats = [];

  for (let stat of playerStats) {
    if (stat.player_id === playerId) {
      stats.push(stat);
    }
  }
  res.json(stats);
});

router.get('/:id', (req, res, next) => {
  const playerId = req.params.id;

  res.json(playerData[playerId - 1]);
});


function getPlayersFromDate (date) {
  const games = getGamesFromDate(date);
  const teams = getTeamsFromGames(games);
  return getPlayersFromTeamIds(teams);
}

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

function getGamesFromDate (date) {
  const games = [];

  for (let game of gameData) {
    if (game.date === date) {
      games.push(game);
    }
  }
  return games;
}

function getTeamsFromGames(games) {
  let teams = [];

  for (let game of games) {
    teams.push(game.home_team_id);
    teams.push(game.away_team_id);
  }

  return teams;
}

module.exports = router;
