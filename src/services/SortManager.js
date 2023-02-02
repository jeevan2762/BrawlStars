
const getLeastTrophies = (character) =>
	character.sort((a, b) => a.trophies - b.trophies);

const getMostTrophies = (character) =>
	character.sort((a, b) => b.trophies - a.trophies);

const getPowerLevel = (character) =>
	character.sort((a, b) => a.power - b.power);

const SortManager = {
	getLeastTrophies,
	getMostTrophies,
	getPowerLevel,
};

export default SortManager;
