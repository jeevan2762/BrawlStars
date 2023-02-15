import { Box } from '@mui/material';
import React from 'react';
import Level from './Level';
import Trophies from './Trophies';

const Header = (context) =>
	<Box>
		<span>
			<Level { ...context }/>
			<Trophies { ...context }/>
		</span>
	</Box>;

export default Header;
