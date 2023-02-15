import { Box } from '@mui/material';
import React from 'react';
import CharacterImage from './CharacterImage';
import Name from './Name';
import Power from './Power';

const Body = (context) => <Box>
	<Box>
		<CharacterImage { ...context }/>
	</Box>
	<Box>
		<Name { ...context }/>
		<span>
			<Power { ...context }/>
		</span>
	</Box>
</Box>;

export default Body;
