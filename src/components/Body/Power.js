import React from 'react';

const Power = ({ data: { character }, state: { powerUpgrade }}) =>
	<div>
		<span className="upgradeImg">
			<img
				className={ powerUpgrade ? 'upgradeTop' : 'upgradeBottom' }
				src="/images/Upgrade.png"
				alt="img"
				width="25px"
				height="25px"
			/>
		</span>
		<span className="power">Power  </span>
		<span className="powerValue">{character.power}</span>
	</div>;

export default Power;
