import { Box } from '@mui/material';
import React from 'react';
import CoinsSquare from './CoinsSquare';

const Footer = (context) => <Box>
	<CoinsSquare { ...context }/>
</Box>;

export default Footer;
