/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { brawlers }}) =>
	brawlers.map((brawler) => ({
		...brawler,
		power: rndBetween(1, 10),
		powerCoins: rndBetween(100, 750),
		brawlCoins: rndBetween(100, 1000),
	}
	));

const CharacterManager = {
	getCharacters,
};

export default CharacterManager;
