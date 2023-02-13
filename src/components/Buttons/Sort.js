import React from 'react';
import SortManager from '../../services/SortManager';

const type = {
	'least Trophies': (context) =>
		SortManager.sortByLeastTrophies(context),
	'most Trophies': (context) =>
		SortManager.sortByMostTrophies(context),
	'power Level': (context) =>
		SortManager.sortByPowerLevel(context),
	'by Rarity': (context) =>
		SortManager.sortByRarity(context),
	'by Rarity Descending': (context) =>
		SortManager.sortByRarityByDescending(context),
	'closest To Next Rank': (context) =>
		SortManager.sortByClosestToNextRank(context),
};

const Sort = (context) => {
	const { state, state: { buttonIndex, sortModes },
		setState, config: { sortBy }} = context;

	return <div className="sort">
		<button
			onClick={ () => setState({
				...state,
				buttonIndex: buttonIndex + 1,
				sortModes: sortBy[buttonIndex % sortBy.length],
				characters: type[sortModes](context),
			}) }
		>{sortModes}</button>
	</div>;
};

export default Sort;
