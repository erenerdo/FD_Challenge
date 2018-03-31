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

					<IndividualGame gameState={footerScores[0]} />
					<div className="games__indiv">
						<div className="games__indiv__team">
							<span className="team-abbrev">
								CHI
							</span>
							<span className="team-score">
								45
							</span>
						</div>
						<div className="games__indiv__team">
							<span className="team-abbrev">
								BOS
							</span>
							<span className="team-score">
								34
							</span>
						</div>
						<div className="games__indiv__game-time">
							3:26 2nd
						</div>
					</div>
					<div className="games__indiv">
						<div className="games__indiv__team">
							<span className="team-abbrev">
								ATL
							</span>
							<span className="team-score">
								43
							</span>
						</div>
						<div className="games__indiv__team">
							<span className="team-abbrev">
								MEM
							</span>
							<span className="team-score">
								39
							</span>
						</div>
						<div className="games__indiv__game-time">
							6:15 3rd
						</div>
					</div>
				</div>
				<div className="app__footer__arrow right">&gt;</div>
			</footer>
		)
	}
}

export default Footer;
