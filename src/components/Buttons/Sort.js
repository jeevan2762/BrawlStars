import React from 'react';

const Sort = (context) => {
	const { state, state: { indexValue, sortModes },
		setState, config: { sortBy }} = context;

	return <div className="sort">
		<button
			onClick={ () => setState({
				...state,
				indexValue: indexValue + 1,
				sortModes: sortBy[indexValue % sortBy.length],
			}) }
		>{sortModes}</button>
	</div>;
};

export default Sort;
