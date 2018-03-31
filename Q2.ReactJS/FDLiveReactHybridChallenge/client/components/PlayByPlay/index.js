import React, { Component } from 'react';
import axios from 'axios';

import {API_URL_PLAYS} from '../../api/constants';

class PlayByPlay extends Component {

	constructor(props){
		super();

		this.state = {
			plays: []
		}
	}

	componentWillMount() {

		axios.get(API_URL_PLAYS).then(function(response){
			this.setState({
				plays: response.data
			})
		}.bind(this))
	}

	render() {
		let renderedPlays = this.state.plays.map((element, index) => {

			return (
				<div key={index} className="app__play-by-play__indiv play">
					<img src={"client/assets/" + element.scoring_player  + ".png"} className="play__headshot" />
					<div className="play__desc">
						<span>
							{element.time_left} {element.quarter}th
						</span>
						<p>
							{element.description}
						</p>
					</div>

					<div className="play__score">
						{element.away_score}-{element.home_score}, GS
					</div>
				</div>
			)
		})

		return (
			<section className="app__play-by-play app__section split-flex">
				<div className="app__section__title">
					Play By Play
				</div>
				<div>
					{renderedPlays}
				</div>
			</section>
		)
	}
}

export default PlayByPlay;
