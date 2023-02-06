import React from 'react';
import BgImage from './BgImage';
import Name from './Name';
import Power from './Power';

const Body = (context) => <div>
	<div>
		<BgImage { ...context }/>
	</div>
	<div>
		<Name { ...context }/>
		<span>
			<Power { ...context }/>
		</span>
	</div>
</div>;

export default Body;
