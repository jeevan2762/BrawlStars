import { Box } from '@mui/material';
import React from 'react';

const PowerCoins = ({ data: { character }}) =>
	<Box>
		<img
			src="/images/PowerCoins.jpg"
			alt="Coin img"
			height="100%"
			width="100%"
		/>
		<span className="powerCoinCount">{character.powerCoins}</span>
	</Box>;

export default PowerCoins;
