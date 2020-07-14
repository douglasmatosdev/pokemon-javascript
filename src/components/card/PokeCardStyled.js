import styled from 'styled-components';

import { Link } from 'react-router-dom'

const Sprite = styled.img`
	width: 5em;
	height: 5em;
	display: none;
`;

const BoxCard = styled.div`
margin-bottom: 10px;
`;

const Card = styled.div`
	/*rgb(35, 35, 35)*//*#232323*/
	/*rgb(82, 82, 82)*//*#525252*/
	background: rgba(82, 82, 82,.5);
	
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
	-webkit-user-select: none;
	-moz-user-select: none;
	-o-user-select: none;
	user-select: none;

	padding-bottom: -100px;

	

`;

const CardFooter = styled.div`
	background: rgb(35, 35, 35);
	width: 100%;
`;

const CardTitleFooter = styled.div`
	/* color title footer card rgb(217, 217, 217) #Dd9d9d9*/
	display: flex;
	justify-content: space-between;
	h5, h6 {
		color: rgb(217, 217, 217);
		font-size: 1.5rem;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #000;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;


export {
	Sprite,
	BoxCard,
	Card,
	CardFooter,
	CardTitleFooter,
	StyledLink
};
