import { Box } from '@mui/material';
import React from 'react';
import Brawler from './Brawler';

const Container = (context) => {
	const { state: { characters }} = context;

	return <Box className="container">
		{characters.map((character, key) =>
			<Brawler
				key={ key }
				{ ...{ ...context, data: { character, key }} }
			/>)}
	</Box>;
};

export default Container;
