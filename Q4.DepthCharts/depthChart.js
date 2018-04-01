/*

Created a depth chart class to be used for any sport.

The depth chart class takes in an array of position for it's constructor and will create the depth chart based off the positions entered in.

Each position will be a key in an hashMap and the value will be an array containing each player object.
The index in the array will signify the players position on the depth chart. Index 0 is starting, 1 is back up, 2 is 2nd string, ..., etc.

*/

class DepthChart {

  constructor(positions) {
    // Create depth chart hash map. Using JS object as hashmap.
    this.depthChartMap = {};

    // Add each position as a key to the depthchart
    // Value will be an array storing each players id
    for (let position of positions) {
      this.depthChartMap[position] = [];
    }
  }

  addPlayerToDepthChart(player, position, positionDepth) {
    // Check for edge case, position entered in not in depthchart list
    if (!(position in this.depthChartMap)) {
      throw Error('Position not in this depth chart');
    }

    // Get players array for the position entered in
    let positionPlayers = this.depthChartMap[position];

    // Check to see if player is already in depth chart, (ex. if we need to move players up or down the depth chart) if they are , they will be removed, if not depth chart will stay the same
    this.removePlayerFromDepthChart(player, position);

    // Add player at new position depth
    this.addPlayerAtPositionDepth(player, positionDepth, positionPlayers);
  }

  removePlayerFromDepthChart(player, position) {
    // Check for edge case, position entered in not in depthchart list
    if (!(position in this.depthChartMap)) {
      throw Error('Position not in this depth chart');
    }

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

  getPlayersUnderPlayerInDepthChart(player, position) {
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
  // Helper functions for class and other functions
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

//
// Part a.)
// Tests for NFL
//

// Create NFL depths chart from class
const nflDepthChart = new DepthChart(['QB', 'WR', 'RB', 'TE', 'K', 'P', 'KR', 'PR']);

console.log('\nTesting for NFL positions:');

// Test addPlayersToDepthChart
nflDepthChart.addPlayerToDepthChart(lebron, 'WR', 0);
nflDepthChart.addPlayerToDepthChart(melo, 'WR', 0);
nflDepthChart.addPlayerToDepthChart(odell, 'WR', 2);
nflDepthChart.addPlayerToDepthChart(antonio, 'KR', 0);
nflDepthChart.addPlayerToDepthChart(aaron, 'QB', 0);
nflDepthChart.addPlayerToDepthChart(lebron, 'K', 0);
console.log('\nPlayers added to depth chart.');

// Test addFullDepthChart
nflDepthChart.getFullDepthChart();

// Test getPlayersUnderPlayerInDepthChart
nflDepthChart.getPlayersUnderPlayerInDepthChart(melo, 'WR');

// Test removePlayerFromDepthChart
// Remove lebron from WR to test remove function
nflDepthChart.removePlayerFromDepthChart(lebron, 'WR');

// Get full depth to see if LeBron is removed from WR, Lebron is id 1
nflDepthChart.getFullDepthChart();


//
// Part b.)
// Tests for MLB
//

const mlbDepthChart = new DepthChart(['SP', 'RP', 'C', '1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF', 'DH']);

console.log('\nTesting for MLB positions:');

// Test addPlayersToDepthChart
mlbDepthChart.addPlayerToDepthChart(lebron, '1B', 0);
mlbDepthChart.addPlayerToDepthChart(melo, '1B', 0);
mlbDepthChart.addPlayerToDepthChart(odell, '1B', 2);
mlbDepthChart.addPlayerToDepthChart(antonio, 'SP', 0);
mlbDepthChart.addPlayerToDepthChart(aaron, 'C', 0);
mlbDepthChart.addPlayerToDepthChart(lebron, 'SS', 0);
console.log('\nPlayers added to depth chart.');

// Test addFullDepthChart
mlbDepthChart.getFullDepthChart();

// Test getPlayersUnderPlayerInDepthChart
mlbDepthChart.getPlayersUnderPlayerInDepthChart(melo, '1B');

// Test removePlayerFromDepthChart
// Remove lebron from 1B to test remove function
mlbDepthChart.removePlayerFromDepthChart(lebron, '1B');

// Get full depth to see if LeBron is removed from 1B, Lebron is id 1
mlbDepthChart.getFullDepthChart();
