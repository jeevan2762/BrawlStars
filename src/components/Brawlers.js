/* eslint-disable no-magic-numbers */
import React from 'react';
import Body from './Body/Index';
import Header from './Header/Index';
import Footer from './Footer/Index';

const multiplier = 200;
const margin = 50;

const style = (context) => {
	const { data: { key }, config: { size }} = context;

	return {
		top: 50 * size,
		left: ((key * multiplier) + margin) * size,
		width: 150 * size,
		height: 150 * size,
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
