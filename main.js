let initialWidth = screen.width;
let initialHeight = screen.height;

// item rarities
// Basic no stats
// Common 
// Uncommon
// Rare
// Epic
// Legendary

// use these as item types along with rarities
// Regular	4k
// Flawless	5k
// Square	10k
// Flawless Square	15k
// Star	35k
// Marquise	75k
// Imperial	100k
// Flawless Imperial	125k
// Royal	150k
// Flawless Royal	175k
// Legendary 50K

let races = [
	'HUMAN',
	'ELF',
	'GIANT',
	'UNDEAD',
	'DWARF'
];

let titles = [
	
	'WEAKEST',
	'WEAL',
	'NORMAL',
	'STRONG',
	'STRONGEST',
	'AWFUL',
	'BOSS'
	
]

let pet = {
	
	
	
}

let player = {
	
	// NAME: window.prompt("What is your name?"),
	NAME: 'CHRIS',
	RACE: races[1],
	AGE: 10,
	LVL: 1,
	HP: 100,
	MP: 100,
	EXP: 0,
	GOLD: 0,
	STR: 10,
	AGI: 10,
	INT: 10,
	WILL: 10,
	LUCK: 10,
	
	AP: 0,
	CP: 0,
	PET: pet
}



let monster = {
	baseHP: 100,
	title: 'NORMAL'
}


const battle = () => {



}

const makeTitle = () => {
	
	
	
}

const log = () => {
	
}


const printToScreen = () => {
	setID('NAME', player.NAME);
	setID('AGE', player.AGE);
	setID('LVL', player.LVL);
	setID('RACE', player.RACE);
	setID('HP', player.HP);
	setID('MP', player.MP);
	setID('EXP', player.EXP);
	setID('GOLD', player.GOLD);
	// STATS
	setID('STR', player.STR);
	setID('AGI', player.AGI);
	setID('INT', player.INT);
	setID('WILL', player.WILL);
	setID('LUCK', player.LUCK);
	setID('AP', player.AP);
	setID('CP', player.CP);
	setID('ATK', player.STR * player.AGI);
	setID('BAL', player.AGI * player.LUCK * player.WILL);
	setID('CRT', player.AGI / 4 + player.LUCK / 4 + player.WILL / 4);
	setID('CRT.M', player.AGI/200 * 100 + 1);
	setID('DEF', player.AGI * player.WILL);
	setID('PRT', player.AGI * player.STR);
	setID('PRT.I', player.AGI * player.WILL);
	
}

const setID = (id, value) => {
	
	document.getElementById(id).innerText = value;
	
}

printToScreen();