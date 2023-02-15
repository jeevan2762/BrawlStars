import { Box } from '@mui/material';
import React from 'react';
import TrophyBar from './TrophyBar';

const Trophies = (context) => {
	const { data: { character }} = context;

	return <Box>
		<TrophyBar { ...context }/>
		<img
			className="trophy"
			src="/images/trophy2.png"
			alt="coin"
			height="12%"
			width="12%"
		/>
		<span className="trophies">{character.trophies}</span>
	</Box>;
};

export default Trophies;
