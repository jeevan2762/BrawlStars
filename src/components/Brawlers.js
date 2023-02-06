/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import React from 'react';
import BgImage from './BgImage';
import CoinsSquare from './CoinsSquare';
import Level from './Level';
import Name from './Name';
import Power from './Power';
import Trophies from './Trophies';

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
		<span>
			<Level { ...context }/>
			<Trophies { ...context }/>
		</span>
		<div>
			<BgImage { ...context }/>
		</div>
		<div>
			<Name { ...context }/>
			<span>
				<Power { ...context }/>
			</span>
		</div>
		<div>
			<CoinsSquare { ...context }/>
		</div>
	</div>;

export default Brawlers;
