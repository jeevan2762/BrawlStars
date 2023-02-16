import { Box } from '@mui/material';
import React from 'react';
import CoinsBox from './CoinsBox';

const Footer = (context) => <Box>
	<CoinsBox { ...context }/>
</Box>;

export default Footer;
