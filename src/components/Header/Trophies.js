import React from 'react';

const Trophies = ({ data: { character }}) =>
	<div className="trophy">
		<img
			src="/images/trophy2.jpg"
			alt="coin"
			height="20%"
			width="20%"
		/>
		<span className="trophies">{character.trophies}</span>
	</div>;

export default Trophies;
