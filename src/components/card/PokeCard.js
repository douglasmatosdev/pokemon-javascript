import React, { Component } from 'react';

import spinner from '../assets/spinner.gif';

import { Card, StyledLink, Sprite, BoxCard, CardFooter, CardTitleFooter } from './PokeCardStyled';

export default class PokeCard extends Component {

	state = {
		name: '',
		imageUrl: '',
		pokemonIndex: '',
		imageLoading: true,
		toManyRequests: false
	};

	componentDidMount() {

		const { name, url } = this.props;
		const pokemonIndex = url.split('/')[url.split('/').length - 2];
		// const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
		const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

		this.setState({
			name,
			imageUrl,
			pokemonIndex
		})

	}

	render() {

		return (
			<BoxCard className="col-md-3 com-sm-6 nb-5">
				<StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
					<Card className="card">

						{this.state.imageLoading ? (
							<img
								src={spinner}
								style={{
									width: '5em',
									height: '5em'
								}}
								className="card-img-top rounded mx-auto d-block nt-2"
								alt={this.state.name}
							/>
						) : null}
						<Sprite className="card-img-top rounded mx-auto nt-2"
							onLoad={() => this.setState({ imageLoading: false })}
							onError={() => this.setState({ toManyRequests: true })}
							src={this.state.imageUrl}
							alt={this.state.name}
							style={
								this.state.toManyRequests ? { display: 'none' } :
									this.state.imageLoading ? null : { display: 'block' }
							}
						/>
						{this.state.toManyRequests ? (

							<h6 className="mx-auto">
								<span className="badge badge-danger nt-2"></span>

							</h6>)

							: null}

						<CardFooter className="card-footer mx-auto">
							<CardTitleFooter>
								<h6 className="card-title">
									{this.state.name
										.toLowerCase()
										.split(' ')
										.map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
										.join(' ')}
								</h6>
								<h5 className="card-title">
									{this.state.pokemonIndex < 10 ? '#00' + this.state.pokemonIndex
									: this.state.pokemonIndex < 100 ? '#0' + this.state.pokemonIndex
									: "#" + this.state.pokemonIndex
									}
								</h5>
							</CardTitleFooter>
						</CardFooter>
					</Card>
				</StyledLink>
			</BoxCard>
		)
	}
}