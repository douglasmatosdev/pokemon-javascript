import React, { Component } from 'react';
import { NavBarStyled, BrandHomeIcon, TextNavbar } from './NavBarStyled';

export default class NavBar extends Component {
	render() {
		return (

			<NavBarStyled className="navbar navbar-expand-md navbar-dark fixed-top">
				<a href='true' className="navbar-brand col-sm-3 col-md-2 mr-0 left-align-items-center">
					{BrandHomeIcon}
				</a>
				<TextNavbar href='true' className="textNavbar">
					<a href='true' className="linkTextNavbar" >Challenge Pokémon from Intelie</a>
				</TextNavbar>
			</NavBarStyled>

		);
	}
}