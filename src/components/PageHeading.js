import React from 'react';
import Sort from './Buttons/Sort';

const PageHeading = (context) => {
	const { state: { characters }} = context;

	return <div>
		<h1>Brawlers {characters.length}/64</h1>
		<Sort { ...context }/>
	</div>;
};

export default PageHeading;
