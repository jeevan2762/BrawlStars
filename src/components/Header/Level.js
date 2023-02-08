import React from 'react';

const Level = ({ data: { character }}) =>
	<div className="rankImg">
		<span className="rank">{character.rank}</span>
		<img
			src="/images/Rank2.png"
			alt="rank img"
			height="13%"
			width="13%"
		/>
	</div>;

export default Level;
