import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const BrawlersPage = (context) => {
	const { state: { characters }} = context;

	return <div>
		<h1>Brawlers</h1>
		<table className="tableStyle">
			<TableHeader { ...context }/>
			{characters.map((brawler, index) =>
				TableBody({ ...context, data: { brawler, index }}))}
		</table>
	</div>;
};

export default BrawlersPage;
