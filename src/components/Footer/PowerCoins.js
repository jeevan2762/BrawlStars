import React from 'react';

const PowerCoins = ({ data: { character }}) =>
	<div>
		<img
			src="/images/PowerCoins.jpg"
			alt="Coin img"
			height="100%"
			width="100%"
		/>
		<span className="powerCoinCount">{character.powerCoins}</span>
	</div>;

export default PowerCoins;
