import React from 'react';

const TableHeader = (context) => {
	const { config: { headers }} = context;

	return <thead>
		<tr>
			{headers.map((heading, key) =>
				<th key={ key } className="headerStyle">{heading}</th>)}
		</tr>
	</thead>;
};

export default TableHeader;
