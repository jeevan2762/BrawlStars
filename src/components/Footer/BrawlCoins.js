import React from 'react';

const BrawlCoins = ({ data: { character }}) =>
	<div>
		<img
			src="/images/BrawlCoins.png"
			alt="Coin img"
			height="100%"
			width="100%"
		/>
		<span className="brawlCoinCount">{character.brawlCoins}</span>
	</div>;

export default BrawlCoins;
