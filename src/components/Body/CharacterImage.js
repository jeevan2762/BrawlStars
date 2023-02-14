import React from 'react';

const CharacterImage = ({ data: { character }}) =>
	<span className="bgImg">
		<img
			src={ character.image }
			alt="img"
			width="180px"
			height="150px"
		/>
	</span>;

export default CharacterImage;
