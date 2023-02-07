import React from 'react';

const BgImage = ({ data: { character }}) =>
	<label className="bgImg">
		<img
			src={ character.image }
			alt="img"
			width="150px"
			height="150px"
		/>
	</label>;

export default BgImage;
