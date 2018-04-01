class DepthChart {
  constructor(positions) {
    // Create depth chart map
    this.depthChartMap = {};

    // Add each position as a key to the depthchart
    // Value will be an array storing each players id
    for (let position of positions) {
      this.depthChartMap[position] = [];
    }
  }

  addPlayerToDepthChart(player, position, positionDepth) {

    let positionPlayers = this.depthChartMap[position];

    // Check to see if player is already in depth chart, if they are remove them
    for (let i = 0; i < positionPlayers.length; i++) {
      let curPlayer = positionPlayers[i];

      // If the player we are trying to add is in the depth chart, remove them
      if (curPlayer.id === player.id) {
        this.removePlayerAtIdx(positionPlayers, i);
        break;
      }
    }

    // Add player at new position depth
    this.addPlayerAtPositionDepth(player, positionDepth, positionPlayers);
  }

  removePlayerFromDepthChart(player, position) {
    let positionPlayers = this.depthChartMap[position];

    for (let i = 0; i < positionPlayers.length; i++) {
      let curPlayer = positionPlayers[i];

      // If the curPlayer is the player we want to remove, remove them
      if (curPlayer.id === player.id) {
        this.removePlayerAtIdx(positionPlayers, i);
        break;
      }
    }
  }

  getFullDepthChart() {
    console.log(this.depthChartMap);
  }

  gertPlayersUnderPlayerInDepthChart(player, position) {
    return this.depthChartMap[position];
  }

  removePlayerAtIdx(positionPlayers, idx) {
    positionPlayers.splice(idx, 1);
  }

  addPlayerAtPositionDepth(player, positionDepth, positionPlayers) {
    positionPlayers.splice(positionDepth, 0, player);
  }

}


/// Test Data
var lebron = {
  player_id: 1,
  name: 'King James'
};

var kristaps = {
  player_id: 2,
  name: 'Kristaps'
};

var odell = {
  player_id: 3,
  name: 'OBJ'
};

var melvin = {
  player_id: 4,
  name: 'Melvin Gordon'
};

var aaron = {
  player_id: 5,
  name: 'Aaron Judge'
};

// Tests for NFL

const nflDepthChart = new DepthChart(['QB', 'WR', 'RB', 'TE', 'K', 'P', 'KR', 'PR']);
