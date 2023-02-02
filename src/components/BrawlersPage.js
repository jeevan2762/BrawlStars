import React from 'react';
import brawlers from '../services/data';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const BrawlersPage = (context) => <div>
	<h1>Brawlers</h1>
	<table className="tableStyle">
		<TableHeader { ...context }/>
		{brawlers.map((brawler, index) =>
			TableBody({ ...context, data: { brawler, index }}))}
	</table>
</div>;

export default BrawlersPage;
