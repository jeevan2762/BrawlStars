import React from 'react';
import TrophyBar from './TrophyBar';

const Trophies = (context) => {
	const { data: { character }} = context;

	return <div>
		<TrophyBar { ...context }/>
		<img
			className="trophy"
			src="/images/trophy2.png"
			alt="coin"
			height="12%"
			width="12%"
		/>
		<span className="trophies">{character.trophies}</span>
	</div>;
};

export default Trophies;
