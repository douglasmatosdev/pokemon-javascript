import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Pagination from "../pagination/Pagination";
import PokeCard from '../card/PokeCard';

import { Dashboard } from './PokeDashboardStyled';;

export default class PokeDashboard extends Component {

	state = {
		url: 'https://pokeapi.co/api/v2/pokemon/?limit=999&offset=0',
		// url: 'https://pokeapi.co/api/v2/pokemon/',
		pokemon: null,
		allPokemons: [],
		currentPokemons: [],
		currentPage: null,
		totalPages: null
	};

	async componentDidMount() {
		const res = await axios.get(this.state.url);
		this.setState({
			pokemon: res.data['results'],
			allPokemons: res.data['results']
		});
	}

	onPageChanged = data => {
		const { allPokemons } = this.state;

		let { currentPage, totalPages, pageLimit } = data;

		const offset = (currentPage - 1) * pageLimit;

		console.log(pageLimit);

		const currentPokemons = allPokemons.slice(offset, offset + pageLimit);

		this.setState({ currentPage, currentPokemons, totalPages });
	}


	render() {

		const {
			allPokemons,
			currentPokemons,
			currentPage,
			totalPages
		} = this.state;

		const totalPokemons = allPokemons.length;

		if (totalPokemons === 0) {
			return null;
		}

		return (
			<Dashboard>
				{this.state.pokemon ? (
					<div className="container mb-5">
						<div className="row d-flex flex-row py-5">
							<div className="d-flex flex-row align-items-center">
								<h2 className="totalPokemons" ><strong className="text-secondary ">{totalPokemons}</strong>{" "}pokemons</h2>
							</div>
							<div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
								{currentPokemons.map((poke, index) => (
									<PokeCard
										key={currentPokemons[index].name}
										name={currentPokemons[index].name}
										url={currentPokemons[index].url}
									/>
								))}
							</div>
							<div className="d-flex flex-column align-items-center" style={{margin: '0 auto'}}>
								<Fragment>
									{currentPage && (
										<span className="current-page d-inline-block h-100 pl-4 text-secondary">
											Page <span className="font-weight-bold">{currentPage}</span> /{" "}
											<span className="font-weight-bold">{totalPages}</span>
										</span>
									)}
								</Fragment>
								<Pagination
									totalRecords={totalPokemons}
									pageLimit={12}
									pageNeighbours={3}
									onPageChanged={this.onPageChanged}
								/>
							</div>
						</div>
					</div>
				) : (
						<h1>Loading Pokemon</h1>
					)}
			</Dashboard>
		);
	}
}

