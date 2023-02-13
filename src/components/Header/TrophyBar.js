import React from 'react';

const TrophyBar = (context) => {
	const { data: { character }} = context;

	return (
		<div className="trophyBar">
			<span
				className="bar"
				style={ { width: `${ character.trophies }px` } }
			/>
		</div>);
};

export default TrophyBar;
