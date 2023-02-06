import React from 'react';

const PowerCoins = ({ state: { character }}) =>
	<div className="powerCoins">
		<img
			src="/images/PowerCoins.jpg"
			alt="Coin img"
			height="50px"
			width="50px"
		/>
		<label className="powerCoinCount">{character.coinsForUpgrade}</label>
	</div>;

export default PowerCoins;
