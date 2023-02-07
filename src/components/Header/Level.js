import React from 'react';

const Level = ({ data: { character }}) =>
	<div className="rankImg">
		<label className="rank">{character.rank}</label>
		<img
			style={ { borderRadius: '170%' } }
			src="/images/Rank.png"
			alt="rank img"
			height="13%"
			width="13%"
		/>
	</div>;

export default Level;
