import React from 'react';
import Brawler from './Brawler';

const Container = (context) => {
	const { state: { characters }} = context;

	return <div className="container">
		{characters.map((character, key) =>
			<Brawler
				key={ key }
				{ ...{ ...context, data: { character, key }} }
			/>)}
	</div>;
};

export default Container;
