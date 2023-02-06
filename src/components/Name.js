import React from 'react';

const Name = ({ state: { character }}) =>
	<label className="name">{character.name}</label>;

export default Name;
