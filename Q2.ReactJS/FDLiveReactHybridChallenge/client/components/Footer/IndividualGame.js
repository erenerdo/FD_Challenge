import React, { Component } from 'react';
import SelectedDetail from './SelectedDetail';

class IndividualGame extends Component {

  constructor(props) {
    super(props);
    this.gameTag = '';
    this.abbrevMap = {
      GSW: 'Warriors',
      OKC: 'Thunder',
      BOS: 'Celtics',
      CHI: 'Bulls',
      MEM: 'Grizzlies',
      ATL: 'Hawks'
    };
  }
  render() {
    const { gameState, selectedGame } = this.props;
    if (!gameState) return null;

    const { home_team } = gameState;
    const { away_team } = gameState;
    const { click } = this.props;

    // Get quarter number and assign it proper term
    let { quarter } = gameState;
    quarter = this.getQuarterTerm(quarter);

    this.gameTag = home_team.abbrev;

    let homeTeamDisplay = selectedGame !== home_team.abbrev ? home_team.abbrev : this.abbrevMap[home_team.abbrev];
    let awayTeamDisplay = selectedGame !== home_team.abbrev ? away_team.abbrev : this.abbrevMap[away_team.abbrev];

    return (
      <div className="games__indiv" onClick={click(home_team.abbrev)}>
        <div className="games__indiv__team">
          <span className="team-abbrev">
            { homeTeamDisplay }
					</span>
          <span className="team-score">
            { home_team.score }
					</span>
        </div>
        <div className="games__indiv__team">
          <span className="team-abbrev">
            { awayTeamDisplay }
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
