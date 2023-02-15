import { Box } from '@mui/material';
import React from 'react';

const TrophyBar = (context) => {
	const { data: { character }} = context;

	return (
		<Box className="trophyBar">
			<span
				className="bar"
				style={ { width: `${ character.trophies }px` } }
			/>
		</Box>);
};

export default TrophyBar;
