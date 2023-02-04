import { React, useState } from 'react';
import './App.scss';
import BrawlersPage from './components/BrawlersPage';
import Sort from './components/Buttons/Sort';
import SortManager from './services/SortManager';

const initialState = (context) => ({
	characters: SortManager.getCharacters(context),
	indexValue: 1,
	sortModes: 'least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlersPage { ...extendedContext }/>
		<Sort { ...extendedContext }/>
	</div>;
};

export default App;
