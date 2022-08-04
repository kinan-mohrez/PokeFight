const express = require('express');
const server = express();
const port = 3000;
const jsonData = require('./file.json');
const cors = require('cors');

server.use(cors());
var corsOptions = {
	origin: '*',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

const pokemonRouter = require('./routes/pokemons');
server.use('/pokemons', cors(corsOptions), pokemonRouter);

server.get('/', cors(corsOptions), (req, res) => {
	res.send('Hello World!');
});

server.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
