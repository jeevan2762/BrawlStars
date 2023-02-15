import React from 'react';
import Body from './Body/Index';
import Header from './Header/Index';
import Footer from './Footer/Index';
import { Box } from '@mui/material';

const Brawler = (context) =>
	<Box
		className="square"
	>
		<Body { ...context }/>
		<Header { ...context }/>
		<Footer { ...context }/>
	</Box>;

export default Brawler;
