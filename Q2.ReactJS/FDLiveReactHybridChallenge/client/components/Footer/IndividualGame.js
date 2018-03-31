import React, { Component } from 'react';

class IndividualGame extends Component {

  render() {
    console.log('hey props', this.props);
    const { gameState } = this.props;
    const { home_team } = gameState;
    const { away_team } = gameState;

    // Get quarter number and assign it proper term
    let { quarter } = gameState;
    quarter = this.getQuarterTerm(quarter);

    return (
      <div className="games__indiv">
        <div className="games__indiv__team">
          <span className="team-abbrev">
            { home_team.abbrev }
					</span>
          <span className="team-score">
            { home_team.score }
					</span>
        </div>
        <div className="games__indiv__team">
          <span className="team-abbrev">
            { away_team.abbrev }
					</span>
          <span className="team-score">
            { away_team.score }
					</span>
        </div>
        <div className="games__indiv__game-time">
          {`${gameState.time_left} ${quarter}`}
				</div>
      </div>
    );
  }

  getQuarterTerm(quarter) {
    if (quarter === 1) return '1st';
    else if (quarter === 2) return '2nd';
    else if (quarter === 3) return '3rd';
    else return '4th';
  }
}

export default IndividualGame;
