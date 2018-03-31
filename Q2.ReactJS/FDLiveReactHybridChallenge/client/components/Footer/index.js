import React, { Component } from 'react';
import IndividualGame from './IndividualGame';
import axios from 'axios';
import { API_URL_FOOTER_SCOREBOARD } from '../../api/constants';


class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			footerScores: []
		};
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
						return (<IndividualGame key={score.home_team.abbrev} gameState={score} />);
					})
				}
				</div>
				<div className="app__footer__arrow right">&gt;</div>
			</footer>
		);
	}
}

export default Footer;
