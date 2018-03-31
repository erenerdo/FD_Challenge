import React, { Component } from 'react';
import PlayerDetail from './PlayerDetail';

class SelectedDetail extends Component {

  render() {
    const { gameState } = this.props;
    if (!gameState) return null;

    const { top_performers } = gameState;

    const player1 = top_performers[0];
    const player2 = top_performers[1];

    return (
      <div className="playersDetail">
        <PlayerDetail playerInfo={player1} />
        <PlayerDetail playerInfo={player2} />
      </div>
    );
  }
}

export default SelectedDetail;
