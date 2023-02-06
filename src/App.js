import { React, useState } from 'react';
import './App.scss';
import Brawler from './components/Brawler';
import Sort from './components/Buttons/Sort';
import PageHeading from './components/PageHeading';
import SortManager from './services/SortManager';

const initialState = (context) => ({
	characters: SortManager.getCharacters(context),
	indexValue: 1,
	sortModes: 'least Trophies',
	character: {
		name: 'Brock',
		rank: 2,
		trophies: 18,
		rarity: 'startingBrawler',
		image: '/images/Brock.png',
		power: 20,
		brawlCoins: 1000,
		coinsForUpgrade: 800,
	},
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
