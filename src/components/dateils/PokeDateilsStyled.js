import styled from 'styled-components';


const CardContainer = styled.div`

	margin-top: 5%;
	@media(max-width: 880px) {
		margin-top: 10%;
	}

	@media(max-width: 590px) {
		margin-top: 15%;
	}

	@media(max-width: 400px) {
		margin-top: 25%;
	}

	line-height: 2;
	.pokemonName {
		display: inline-block;
	}
	.card-header,
	.imagePokemon,
	.card-footer {
		border-radius: 10px;
		background: rgba(0,0,0,.1);
	}
`;


const TYPE_COLORS = {
	bug: 'B1C12E',
	dark: '4F3A2D',
	dragon: '755EDF',
	electric: 'FCBC17',
	fairy: 'F4B1F4',
	fighting: '823551D',
	fire: 'E73B0C',
	flying: 'A3B3F7',
	ghost: '6060B2',
	grass: '74C236',
	ground: 'D3B357',
	ice: 'A3E7FD',
	normal: 'C8C4BC',
	poison: '934594',
	psychic: 'ED4882',
	rock: 'B9A156',
	steel: 'B5B5C3',
	water: '3295F6'
 };

export {
	TYPE_COLORS,
	CardContainer
 };
