import React from 'react';

const Name = ({ data: { character }}) =>
	<span className="name">{character.name}</span>;

export default Name;
