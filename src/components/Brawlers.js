/* eslint-disable no-magic-numbers */
import React from 'react';
import Body from './Body/Index';
import Header from './Header/Index';
import Footer from './Footer/Index';

const multiplier = 150;
const margin = 50;

const style = (context) => {
	const { data: { key }, config: { size }} = context;

	return {
		top: 50 * size,
		left: ((key * multiplier) + margin) * size,
		width: 120 * size,
		height: 80 * size,
	};
};

const Brawlers = (context) =>
	<div
		className="square"
		style={ style(context) }
	>
		<Header { ...context }/>
		<Body { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Brawlers;
