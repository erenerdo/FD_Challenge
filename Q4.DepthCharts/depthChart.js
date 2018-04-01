/*

Created a depth chart class to be used for any sport. The depth chart class takes in an array of position for it's constructor and will create the depth chart based off the positions entered in

*/

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
      if (curPlayer.player_id === player.player_id) {
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
      if (curPlayer.player_id === player.player_id) {
        this.removePlayerAtIdx(positionPlayers, i);
        break;
      }
    }
  }

  getFullDepthChart() {
    console.log('\nCurrent Depth Chart:');

    for (let position in this.depthChartMap) {
      if (this.depthChartMap[position].length > 0) {
        let IdsForPosition = this.depthChartMap[position].map(player => player.player_id);
        console.log(position + ':', IdsForPosition);
      }
    }
  }

  gertPlayersUnderPlayerInDepthChart(player, position) {
    console.log('\nPlayers under', player.name, 'for', position + ':');

    let positionPlayers = this.depthChartMap[position];

    for (let i = 0; i < positionPlayers.length; i++) {
      let curPlayer = positionPlayers[i];

      // If the curPlayer is the player we're looking for output array of players under them
      if (curPlayer.player_id === player.player_id) {
        console.log(positionPlayers.slice(i + 1).map(p => p.player_id));
        break;
      }
    }
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

var melo = {
  player_id: 2,
  name: 'Carmelo'
};

var odell = {
  player_id: 3,
  name: 'OBJ'
};

var antonio = {
  player_id: 4,
  name: 'Antonio Brown'
};

var aaron = {
  player_id: 5,
  name: 'Aaron Judge'
};

// Tests for NFL

// Create NFL depths chart from class
const nflDepthChart = new DepthChart(['QB', 'WR', 'RB', 'TE', 'K', 'P', 'KR', 'PR']);


// Test addPlayersToDepthChart
nflDepthChart.addPlayerToDepthChart(lebron, 'WR', 0);
nflDepthChart.addPlayerToDepthChart(melo, 'WR', 0);
nflDepthChart.addPlayerToDepthChart(odell, 'WR', 2);
nflDepthChart.addPlayerToDepthChart(antonio, 'KR', 0);
nflDepthChart.addPlayerToDepthChart(aaron, 'QB', 0);
nflDepthChart.addPlayerToDepthChart(lebron, 'K', 0);

// Test addFullDepthChart
nflDepthChart.getFullDepthChart();

// Test getPlayersUnderPlayerInDepthChart
nflDepthChart.gertPlayersUnderPlayerInDepthChart(melo, 'WR');

// Test removePlayerFromDepthChart
// Remove lebron from WR to test remove function
nflDepthChart.removePlayerFromDepthChart(lebron, 'WR');

// Get full depth to see if LeBron is removed from WR, Lebron is id 1
nflDepthChart.getFullDepthChart();
