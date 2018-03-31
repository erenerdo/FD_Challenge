const express = require('express');
const router = express.Router();
const teams = require('../teamData.js');

router.get('/', (req, res, next) => {
  res.json(teams);
});

router.get('/:id', (req, res, next) => {
  const teamId = req.params.id;

  res.json(teams[teamId - 1]);
});


module.exports = router;
