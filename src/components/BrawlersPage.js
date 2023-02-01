import React from 'react';
import TableHeader from './TableHeader';

const BrawlersPage = (context) => <div>
	<label className="h1">Brawlers</label>
	<table className="tableStyle">
		<TableHeader { ...context }/>
	</table>
</div>;

export default BrawlersPage;
