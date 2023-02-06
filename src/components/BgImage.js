import React from 'react';

const BgImage = ({ data: { character }}) =>
	<label className="bgImg">
		<img
			src={ character.image }
			alt="img"
			width="270px"
			height="270px"
		/>
	</label>;

export default BgImage;
