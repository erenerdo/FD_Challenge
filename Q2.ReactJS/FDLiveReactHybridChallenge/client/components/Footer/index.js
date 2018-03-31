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

	click (gameTag) {
		return function() {
			console.log('callback this:', this.state);
			console.log(gameTag);
			console.log(this.state.selectedGame);
			if (this.state.selectedGame !== gameTag) this.setState({selectedGame: gameTag});
			else this.setState({selectedGame: ''});
		}.bind(this);
	}
}

export default Footer;
