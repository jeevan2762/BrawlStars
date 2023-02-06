import React from 'react';

const Trophies = ({ state: { character }}) =>
	<label className="trophies">{character.trophies}</label>;

export default Trophies;
