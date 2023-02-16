import { Box } from '@mui/material';
import React from 'react';

const Coins = ({ data, children }) =>
	<Box>
		<img
			src={ `/images/${ children }.png` }
			alt="Coin img"
			height="100%"
			width="100%"
		/>
		<span className="brawlCoinCount">{data}</span>
	</Box>;

export default Coins;
