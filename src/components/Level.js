import React from 'react';

const Level = ({ data: { character }}) =>
	<div className="rankImg">
		<label className="rank">{character.rank}</label>
		<img
			src="/images/Rank.png"
			alt="rank img"
			height="40px"
			width="40px"
		/>
	</div>;

export default Level;
