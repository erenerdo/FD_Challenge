import React, { Component } from 'react';

class PlayerDetail extends Component {
  render() {
    const { playerInfo } = this.props;
    console.log('player info:');
    console.log(playerInfo);
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
