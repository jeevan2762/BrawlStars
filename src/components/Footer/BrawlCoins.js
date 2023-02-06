import React from 'react';

const BrawlCoins = ({ data: { character }}) =>
	<div className="brawlCoins">
		<img
			style={ { borderRadius: '60%' } }
			src="/images/BrawlCoins.png"
			alt="Coin img"
			height="50px"
			width="50px"
		/>
		<label className="brawlCoinCount">{character.brawlCoins}</label>
	</div>;

export default BrawlCoins;
