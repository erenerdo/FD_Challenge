import React, { Component } from 'react';

// Component to show individual player stats when a game is selected
class PlayerDetail extends Component {
  render() {
    const { playerInfo } = this.props;
    return (
      <div className="player">
        <div className="playerTeam">
          {`${playerInfo.team}`}
        </div>
        <div className="playerInfo">
          <div className="playerName">
            {`${playerInfo.name}, ${playerInfo.position}`}
          </div>
          <div className="playerStats">
            {
              `${playerInfo.points} points ${playerInfo.rebounds} rebounds`
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerDetail;
