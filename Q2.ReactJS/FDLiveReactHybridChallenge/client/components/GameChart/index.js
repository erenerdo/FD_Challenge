import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';

import {API_URL_GAME_STATS} from '../../api/constants';


class GameChart extends Component {

	constructor(props){
		super();

		this.state = {
			gameState: {}
		}
	}

	componentWillMount() {

		axios.get(API_URL_GAME_STATS).then(function(response){
			this.setState({
				gameState: response.data
			})
		}.bind(this))
	}


	render() {

		let gameState = this.state.gameState;

		if ( !_.isEmpty(gameState) ){
			console.log(gameState);

			let awayShotPerc = gameState.away_team.shooting_stats.map((stat, index) => {
				return (
					<div className="stat" key={index}>
						<span className="stat__title">
							{stat.title}
						</span>
						<span className="stat__int">
							{stat.perc}
						</span>
					</div>
				)
			});

			let homeShotPerc = gameState.home_team.shooting_stats.map((stat, index) => {
				return (
					<div className="stat" key={index}>
						<span className="stat__title">
							{stat.title}
						</span>
						<span className="stat__int">
							{stat.perc}
						</span>
					</div>
				)
			});

			return (
				<section className="app__game-chart app__section">
					<div className="app__game-chart__score score">
						<div className="score__team away-team">
							<div className="score__team__name">
								{gameState.away_team.location}
								<span className="mascot">
									{gameState.away_team.name}
								</span>
							</div>
							<div className="score__team__score">
								{gameState.away_team.score}
							</div>
						</div>

						<div className="score__game-info">
							<span className="score__game-info__game-time">
								{gameState.time_left} {gameState.quarter}th
							</span>
							<div className="score__game-info__venue">
								{gameState.arena}<br/>
								{gameState.location}
							</div>
						</div>

						<div className="score__team home-team">
							<div className="score__team__score">
								{gameState.home_team.score}
							</div>
							<div className="score__team__name">
								{gameState.home_team.location}
								<span className="mascot">
									{gameState.home_team.name}
								</span>
							</div>
						</div>
					</div>

					<div className="score__last-play">
						last play: tv timeout. go get a snack.
					</div>

					<div className="score__shot-chart">
						<div className="score__shot-chart__team away-team">
							{awayShotPerc}
						</div>

						<div className="score__shot-chart__image">
							<img src="client/assets/shot_chart.png"/>
						</div>

						<div className="score__shot-chart__team home-team">
							{homeShotPerc}
						</div>
					</div>

				</section>
			)
		} else {

			return (
				<section className="app__game-chart app__section"></section>
			)
		}

	}
}

export default GameChart;
