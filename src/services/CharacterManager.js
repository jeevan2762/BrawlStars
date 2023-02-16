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

const getPowerUpgrade = (context) => {
	const { setState } = context;

	return setInterval(() => setState((state) =>
		({
			...state,
			moveUpgradeIcon: !state.moveUpgradeIcon,
		})), 1000);
};

const CharacterManager = {
	getCharacters,
	getPowerUpgrade,
};

export default CharacterManager;
