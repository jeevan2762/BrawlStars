import React from 'react';

const BgImage = ({ data: { character }}) =>
	<label className="bgImg">
		<img
			src={ character.image }
			alt="img"
			width="50%"
			height="40%"
		/>
	</label>;

export default BgImage;
