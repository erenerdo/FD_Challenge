import React, { Component } from 'react';
import SelectedDetail from './SelectedDetail';

class IndividualGame extends Component {

  constructor(props) {
    super(props);
    this.gameTag = '';
  }
  render() {
    const { gameState } = this.props;
    if (!gameState) return null;

    const { home_team } = gameState;
    const { away_team } = gameState;
    const { click } = this.props;

    // Get quarter number and assign it proper term
    let { quarter } = gameState;
    quarter = this.getQuarterTerm(quarter);

    this.gameTag = home_team.abbrev;

    return (
      <div className="games__indiv" onClick={click(home_team.abbrev)}>
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
        <SelectedDetail gameState={gameState} />
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
