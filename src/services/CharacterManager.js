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

const getSquare = (context) => {
	const { data: { key },
		config: { size, topMultiplier, topMargin, multiplier, margin }}
		= context;

	return {
		top: (Math.floor(key / 3) * topMultiplier) + topMargin,
		left: (((key % 3) * multiplier) + margin) * size,
		width: 120 * size,
		height: 80 * size,
	};
};

const getPowerUpgrade = (context) => {
	const { setState } = context;

	return setInterval(() => setState((state) =>
		({
			...state,
			powerUpgrade: !state.powerUpgrade,
		})), 1000);
};

const CharacterManager = {
	getCharacters,
	getSquare,
	getPowerUpgrade,
};

export default CharacterManager;
