import React, { Component } from 'react'

import PokeDashboard from '../dashboard/PokeDashboard';

export default class Home extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<PokeDashboard />
				</div>
			</div>
		)
	}
}
