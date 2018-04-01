import React, { Component } from 'react';
import PlayerDetail from './PlayerDetail';

// Component to show top performers when selected
class SelectedDetail extends Component {
  render() {
    const { gameState, selectedGame } = this.props;
    if (!gameState || selectedGame === undefined) return null;
    else if (gameState.home_team.abbrev !== selectedGame) return null;

    const { top_performers } = gameState;

    const player1 = top_performers[0];
    const player2 = top_performers[1];

    // Render player details for each top performer
    return (
      <div className="playersDetail">
        <PlayerDetail playerInfo={player1} />
        <PlayerDetail playerInfo={player2} />
      </div>
    );
  }
}

export default SelectedDetail;
