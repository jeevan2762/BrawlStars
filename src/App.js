import { React, useState } from 'react';
import './App.scss';
import Brawler from './components/Brawler';
import Sort from './components/Buttons/Sort';
import PageHeading from './components/PageHeading';
import CharacterManager from './services/CharacterManager';

const initialState = (context) => ({
	characters: CharacterManager.getCharacters(context),
	indexValue: 1,
	sortModes: 'least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Sort { ...extendedContext }/>
		<PageHeading { ...extendedContext }/>
		<Brawler { ...extendedContext }/>
	</div>;
};

export default App;
