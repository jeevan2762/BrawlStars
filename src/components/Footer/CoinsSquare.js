import { Box } from '@mui/material';
import React from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const CoinsSquare = (context) =>
	<Box className="coinsSquare">
		<PowerCoins { ...context }/>
		<BrawlCoins { ...context }/>
		<span className="plus">+</span>
	</Box>;

export default CoinsSquare;
