import React from 'react';

const Trophies = ({ data: { character }}) =>
	<div className="trophy">
		<img
			src="/images/trophy2.jpg"
			alt="coin"
			height="20%"
			width="20%"
		/>
		<label className="trophies">{character.trophies}</label>
	</div>;

export default Trophies;
