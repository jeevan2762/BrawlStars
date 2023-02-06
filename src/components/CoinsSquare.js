import React from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const CoinsSquare = (context) =>
	<div className="coinsSquare">
		<BrawlCoins { ...context }/>
		<PowerCoins { ...context }/>
		<label className="plus">+</label>
	</div>;

export default CoinsSquare;
