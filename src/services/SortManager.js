
const sortByLeastTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => a.trophies - b.trophies);

const sortByMostTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => b.trophies - a.trophies);

const sortByPowerLevel = ({ state: { characters }}) =>
	characters.sort((a, b) => a.power - b.power);

const sortByRarity = ({ state: { characters }, config: { rarityLevel }}) =>
	characters.sort((a, b) => rarityLevel[a.rarity] - rarityLevel[b.rarity]);

const sortByRarityByDescending = ({ state: { characters },
	config: { rarityLevel }}) =>
	characters.sort((a, b) => rarityLevel[b.rarity] - rarityLevel[a.rarity]);

const sortByClosestToNextRank = ({ state: { characters },
	config: { rankTrophies }}) =>
	characters.sort((a, b) => (rankTrophies[a.rank] - a.trophies)
		- (rankTrophies[b.rank] - b.trophies));

const SortManager = {
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByPowerLevel,
	sortByRarity,
	sortByRarityByDescending,
	sortByClosestToNextRank,
};

export default SortManager;
