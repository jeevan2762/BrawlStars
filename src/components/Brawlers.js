/* eslint-disable max-lines-per-function */
import React from 'react';
import BgImage from './BgImage';
import CoinsSquare from './CoinsSquare';
import Level from './Level';
import Name from './Name';
import Power from './Power';
import Square from './Square';
import Trophies from './Trophies';

const Brawlers = (context) =>
	<div>
		<Square { ...context }/>
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
