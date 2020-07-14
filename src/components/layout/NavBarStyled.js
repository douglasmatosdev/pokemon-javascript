import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const NavBarStyled = styled.nav`
	background-color: #232323;
`;

const BrandHomeIcon = 
<FontAwesomeIcon 
	icon={faHome}
	style={{
		color: '#fff',
		fontSize: '2em'
	}}
/>;

const TextNavbar = styled.span`
	
	margin-right: 5%;

	@media (max-width: 580px) {
		display: none;
  	}
  	a {
	  text-decoration: none;
	  font-size: 1.5rem;
	  color: #fff;
  	}
`;

export {
	NavBarStyled,
	BrandHomeIcon,
	TextNavbar,
};
