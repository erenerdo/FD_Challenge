import React, { Component } from 'react';
import IndividualGame from './IndividualGame';
import SelectedDetail from './SelectedDetail';
import axios from 'axios';
import { API_URL_FOOTER_SCOREBOARD } from '../../api/constants';


class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			footerScores: [],
			selectedGame: ''
		};
		this.click = this.click.bind(this);
	}

	componentWillMount() {
		// Make API call to get footer data and set it to the local state
		axios.get(API_URL_FOOTER_SCOREBOARD)
		.then(res => {
			this.setState({footerScores: res.data});
		});
	}

	render() {
		const { footerScores } = this.state;
		return (
			<footer className="app__footer">
				<div className="app__footer__arrow left">&lt;</div>
				<div className="app__footer__wrap games">
				{
					// Iterate through reach score and map them to the correct React components
					footerScores.map(score => {
						return (
							<div key={score.home_team.abbrev} className="games" >
							<IndividualGame gameState={score} selectedGame={this.state.selectedGame} click={this.click} />
							<SelectedDetail gameState={score} selectedGame={this.state.selectedGame} />
							</div>
						);
					})
				}
				</div>
				<div className="app__footer__arrow right">&gt;</div>
			</footer>
		);
	}

// Click function to be used in each game component that returns a function that will change the footers state, thus causing a rerender
	click (gameTag) {
		return function() {
			if (this.state.selectedGame !== gameTag) this.setState({selectedGame: gameTag});
			else this.setState({selectedGame: ''});
		}.bind(this);
	}
}

export default Footer;
