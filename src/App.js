import { React } from 'react';
import './App.scss';
import BrawlersPage from './components/BrawlersPage';
import Sort from './components/Buttons/Sort';

const App = (context) =>
	<div className="App">
		<BrawlersPage { ...context }/>
		<Sort { ...context }/>
	</div>;

export default App;
