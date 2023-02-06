import React from 'react';
import Level from './Level';
import Trophies from './Trophies';

const Header = (context) =>
	<div>
		<span>
			<Level { ...context }/>
			<Trophies { ...context }/>
		</span>
	</div>;

export default Header;
