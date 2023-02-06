import React from 'react';

const Level = ({ state: { character }}) =>
	<label className="rank">{character.rank}</label>;

export default Level;
