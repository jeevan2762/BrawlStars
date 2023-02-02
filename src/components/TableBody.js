import React from 'react';

const TableBody = (context) => {
	const { config: { headers }, data: { brawler, index }} = context;

	return <tbody>
		<tr key={ index }>
			{headers.map((header, key) =>
				<td key={ key } className="bodyStyle">
					{brawler[header]}
				</td>)}
		</tr>
	</tbody>;
};

export default TableBody;
