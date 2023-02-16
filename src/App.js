import { Box } from '@mui/material';
import { React, useState } from 'react';
import './App.scss';
import Container from './components/Container';
import PageHeading from './components/PageHeading';
import CharacterManager from './services/CharacterManager';

const initialState = (context) => ({
	characters: CharacterManager.getCharacters(context),
	buttonIndex: 1,
	sortModes: 'least Trophies',
	moveUpgradeIcon: false,
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...context, state, setState };
	const { once } = context;

	once(() => CharacterManager.getPowerUpgrade(extendedContext));

	return <Box className="App">
		<PageHeading { ...extendedContext }/>
		<Container { ...extendedContext }/>
	</Box>;
};

export default App;
