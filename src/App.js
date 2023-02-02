import { React, useState } from 'react';
import './App.scss';
import BrawlersPage from './components/BrawlersPage';
import Sort from './components/Buttons/Sort';
import brawlers from './services/data';

const initialState = {
	characters: brawlers,
	indexValue: 0,
	sortModes: 'None',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlersPage { ...extendedContext }/>
		<Sort { ...extendedContext }/>
	</div>;
};

export default App;
