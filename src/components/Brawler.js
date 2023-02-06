import React from 'react';
import Brawlers from './Brawlers';

const Brawler = (context) => {
	const { state: { characters }} = context;

	return <div>
		{characters.map((character, key) =>
			<Brawlers
				key={ key }
				{ ...{ ...context, data: { character, key }} }
			/>)}
	</div>;
};

export default Brawler;
