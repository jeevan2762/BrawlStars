import React from 'react';

const PageHeading = ({ state: { characters }}) =>
	<h1 className="h1">Brawlers {characters.length}/64</h1>;

export default PageHeading;
