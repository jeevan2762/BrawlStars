import React from 'react';

const Trophies = ({ data: { character }}) =>
	<div className="trophy">
		<img
			src="/images/trophy2.jpg"
			alt="coin"
			height="35px"
			width="35px"
		/>
		<label className="trophies">{character.trophies}</label>
	</div>;

export default Trophies;
