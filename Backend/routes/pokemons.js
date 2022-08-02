const jsonData = require('../file.json');
const express = require('express');
const router = express.Router();
var cors = require('cors');

app.use(cors());

let pokemonsData = [];
pokemonsData = jsonData;

//complete list of pokemon
router.get('/', (req, res) => {
	res.json(jsonData);
});

//gives only one pokemon
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const foundPokemon = pokemonsData.find((pokemon) => pokemon.id === id);
	console.log(foundPokemon);
});

//gives only one pokemon from the JSON thanks to its id and retrieve only one information (name or type or base)
router.get('/:id/:info', (req, res) => {
	const { id } = req.params;
	const { info } = req.params;
	if (info === 'name') {
		console.log('name');
	}
	if (info === 'type') {
		console.log('type');
	}
	if (info === 'base') {
		console.log('base');
	}
});

module.exports = router;
