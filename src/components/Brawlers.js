import React from 'react';
import Body from './Body/Index';
import Header from './Header/Index';
import Footer from './Footer/Index';
import CharacterManager from '../services/CharacterManager';

const Brawlers = (context) =>
	<div
		className="square"
		style={ CharacterManager.getSquare(context) }
	>
		<Header { ...context }/>
		<Body { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Brawlers;
