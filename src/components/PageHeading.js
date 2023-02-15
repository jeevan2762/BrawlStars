import { Box } from '@mui/material';
import React from 'react';
import Sort from './Buttons/Sort';

const PageHeading = (context) => {
	const { state: { characters }} = context;

	return <Box>
		<h1>Brawlers {characters.length}/64</h1>
		<Sort { ...context }/>
	</Box>;
};

export default PageHeading;
