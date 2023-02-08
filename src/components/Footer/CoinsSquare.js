import React from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const CoinsSquare = (context) =>
	<div className="coinsSquare">
		<PowerCoins { ...context }/>
		<BrawlCoins { ...context }/>
		<span className="plus">+</span>
	</div>;

export default CoinsSquare;
