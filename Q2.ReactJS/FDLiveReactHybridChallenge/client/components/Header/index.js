import React, { Component } from 'react';
import axios from 'axios';

import {API_URL_NAV_ELEMENTS} from '../../api/constants';

class Header extends Component {

	constructor(props){
		super();

		this.state = {
			navElements: []
		}
	}

	componentWillMount() {

		axios.get(API_URL_NAV_ELEMENTS).then(function(response){
			this.setState({
				navElements: response.data
			})
		}.bind(this))
	}

	render() {
		let renderedNav = this.state.navElements.map((element, index) => {
			return (
				<li key={index}>
					{element.title}
				</li>
			)
		})

		return (
			<header className="app__header">

				<ul className="app__header__main-nav">
					<li className="logo">

					</li>
					{renderedNav}
				</ul>

				<div className="app__header__account">

				</div>
			</header>
		)
	}
}

export default Header;
