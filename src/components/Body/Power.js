import { Box } from '@mui/material';
import React from 'react';

const Power = ({ data: { character }, state: { moveUpgradeIcon }}) =>
	<Box>
		<span className="upgradeImg">
			<img
				className={ moveUpgradeIcon ? 'moveTop' : 'moveBottom' }
				src="/images/Upgrade.png"
				alt="img"
				width="25px"
				height="25px"
			/>
		</span>
		<span className="power">Power  </span>
		<span className="powerValue">{character.power}</span>
	</Box>;

export default Power;
