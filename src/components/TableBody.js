import React from 'react';

const displayImage = (path) =>
	<img
		src={ path }
		alt=" img can't be displayed"
		width="100px"
		height="100px"
	/>;

const TableBody = (context) => {
	const { config: { headers }, data: { brawler, index }} = context;

	return <tbody>
		<tr key={ index }>
			{headers.map((header, key) =>
				<td key={ key } className="bodyStyle">
					{brawler[header] === brawler.image
						? displayImage(brawler.image)
						: brawler[header]}
				</td>)}
		</tr>
	</tbody>;
};

export default TableBody;
