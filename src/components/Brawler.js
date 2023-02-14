import React from 'react';
import Body from './Body/Index';
import Header from './Header/Index';
import Footer from './Footer/Index';

const Brawler = (context) =>
	<div
		className="square"
	>
		<Body { ...context }/>
		<Header { ...context }/>
		<Footer { ...context }/>
	</div>;

export default Brawler;
