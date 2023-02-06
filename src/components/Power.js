import React from 'react';

const Power = ({ state: { character }}) =>
	<div>
		<label className="power">Power  </label>
		<label className="powerValue">{character.power}</label>
	</div>;

export default Power;
