/* eslint-disable max-lines-per-function */
import React from 'react';
import SortManager from '../../services/SortManager';

const Sort = (context) => {
	const { state, state: { indexValue, sortModes, characters },
		setState, config: { sortBy }} = context;

	const type = {
		leastTrophies: (character) =>
			SortManager.getLeastTrophies(character),
		mostTrophies: (character) =>
			SortManager.getMostTrophies(character),
		powerLevel: (character) =>
			SortManager.getPowerLevel(character),
	};

	return <div className="sort">
		<button
			onClick={ () => setState({
				...state,
				indexValue: indexValue + 1,
				sortModes: sortBy[indexValue % sortBy.length],
				characters: type[sortModes](characters),
			}) }
		>{sortModes}</button>
	</div>;
};

export default Sort;
