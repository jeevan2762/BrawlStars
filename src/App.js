import { React, useState } from 'react';
import './App.scss';
import Container from './components/Container';
import Sort from './components/Buttons/Sort';
import PageHeading from './components/Table/PageHeading';
import CharacterManager from './services/CharacterManager';

const initialState = (context) => ({
	characters: CharacterManager.getCharacters(context),
	buttonIndex: 1,
	sortModes: 'least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Sort { ...extendedContext }/>
		<PageHeading { ...extendedContext }/>
		<Container { ...extendedContext }/>
	</div>;
};

export default App;
