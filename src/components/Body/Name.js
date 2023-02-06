import React from 'react';

const Name = ({ data: { character }}) =>
	<label className="name">{character.name}</label>;

export default Name;
