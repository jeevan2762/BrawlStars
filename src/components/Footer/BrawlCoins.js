import { Box } from '@mui/material';
import React from 'react';

const BrawlCoins = ({ data: { character }}) =>
	<Box>
		<img
			src="/images/BrawlCoins.png"
			alt="Coin img"
			height="100%"
			width="100%"
		/>
		<span className="brawlCoinCount">{character.brawlCoins}</span>
	</Box>;

export default BrawlCoins;
