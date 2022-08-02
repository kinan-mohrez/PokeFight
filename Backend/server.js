const express = require('express');
const app = express();
const port = 3000;
const jsonData = require('./file.json');
var cors = require('cors');

app.use(cors());

const pokemonRouter = require('./routes/pokemons');
app.use('/pokemons', pokemonRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
