import React from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const CoinsSquare = (context) =>
	<div className="coinsSquare">
		<PowerCoins { ...context }/>
		<BrawlCoins { ...context }/>
		<label className="plus">+</label>
	</div>;

export default CoinsSquare;
