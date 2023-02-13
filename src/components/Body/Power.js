import React from 'react';

const Power = ({ data: { character }}) =>
	<div>
		<img
			className="upgradeImg"
			src="/images/Upgrade.png"
			alt="img"
			width="25px"
			height="25px"
		/>
		<span className="power">Power  </span>
		<span className="powerValue">{character.power}</span>
	</div>;

export default Power;
