import React from 'react';

const Power = ({ state: { character }}) =>
	<label className="power">Power  {character.power}</label>;

export default Power;
