import React from 'react';

const PowerCoins = ({ data: { character }}) =>
	<div className="powerCoins">
		<img
			style={ { borderRadius: '50%' } }
			src="/images/PowerCoins.jpg"
			alt="Coin img"
			height="50px"
			width="50px"
		/>
		<label className="powerCoinCount">{character.powerCoins}</label>
	</div>;

export default PowerCoins;
