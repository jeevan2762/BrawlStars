import React from 'react';
import CharacterImage from './CharacterImage';
import Name from './Name';
import Power from './Power';

const Body = (context) => <div>
	<div>
		<CharacterImage { ...context }/>
	</div>
	<div>
		<Name { ...context }/>
		<span>
			<Power { ...context }/>
		</span>
	</div>
</div>;

export default Body;
