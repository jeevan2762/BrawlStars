import React from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const CoinsSquare = (context) =>
	<div className="coinsSquare">
		<BrawlCoins { ...context }/>
		<PowerCoins { ...context }/>
	</div>;

export default CoinsSquare;
