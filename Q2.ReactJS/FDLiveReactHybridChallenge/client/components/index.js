import React, { Component, Fragment } from 'react';

import Header from './Header/index';
import PlayByPlay from './PlayByPlay/index';
import GameChart from './GameChart/index';
import Stats from './Stats/index';
import YourScoring from './YourScoring/index';
import Footer from './Footer/index';

class Wrap extends Component {

	render(){

		return (
			<main className="app">
				<Header />
				<section className="app__flex app__wrap">
					<section className="app__column">
						<GameChart />

						<div className="app__flex">
							<PlayByPlay />

							<Stats />
						</div>
					</section>
					<section className="app__sidebar">
						<YourScoring />
					</section>
				</section>
				<Footer />
			</main>
		)
	}
}

export default Wrap;
