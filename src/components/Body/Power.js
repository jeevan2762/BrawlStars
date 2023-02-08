import React from 'react';

const Power = ({ data: { character }}) =>
	<div>
		<span className="power">Power  </span>
		<span className="powerValue">{character.power}</span>
	</div>;

export default Power;
