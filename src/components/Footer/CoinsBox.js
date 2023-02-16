import { peek } from '@laufire/utils/debug';
import { Box } from '@mui/material';
import React from 'react';
import Coins from './Coins';

const CoinsBox = (context) => {
	const { data: { character: { brawlCoins, powerCoins }}} = context;

	peek(brawlCoins);
	return <Box className="coinsBox">
		<Coins { ...{ ...context, data: brawlCoins } }>BrawlCoins</Coins>
		<span className="plus">+</span>
		<Coins { ...{ ...context, data: powerCoins } }>PowerCoins</Coins>
	</Box>;
};

export default CoinsBox;
