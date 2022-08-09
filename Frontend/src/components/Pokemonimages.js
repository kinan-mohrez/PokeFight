import React, { useEffect, useState } from 'react';

export default function Pokemonimages({ pokemonId, pokemonName, language }) {
	const [tinyImages, setTinyImages] = useState([]);

	function Pokemonimage(pokemonId) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				// console.log(data);
				setTinyImages(data);
			});
	}
	useEffect(() => {
		Pokemonimage(pokemonId);
	});

	return (
		<div>
			<li key={pokemonId}>
				<div>
					<img
						src={tinyImages.sprites?.front_default}
						alt={pokemonName[`${language}`]}
					/>
				</div>
				<div>{pokemonName[`${language}`]}</div>
			</li>
		</div>
	);
}
