import React from 'react';

const Trophies = ({ state: { character }}) =>
	<div className="trophy">
		<img
			src="/images/trophy2.jpg"
			alt="coin"
			height="25px"
			width="25px"
		/>
		<label className="trophies">{character.trophies}</label>
	</div>;

export default Trophies;
