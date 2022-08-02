import React from "react";

function PokeDetails({ pokemons, isLoading }) {
  const id = 4 - 1;
  console.log(pokemons[id]);

  const onePokemon = pokemons[id];
  //console.log(pokemons);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {pokemons.length > 0 && (
        <ul className="pokemonDetails">
          <li>Pokedex Nr. {id + 1}</li>
          <li>Name: {onePokemon.name["english"]} </li>
          <li>...</li>
          <li>HP: {onePokemon.base["HP"]} </li>
          <li>
            Type: {onePokemon.type[0]}{" "}
            {onePokemon.type[1] ? `, ${onePokemon.type[1]}` : ``}
          </li>
          <li>Attack: {onePokemon.base["Attack"]}</li>
          <li>Defense: {onePokemon.base["Defense"]}</li>
          <li>Speed: {onePokemon.base["Speed"]}</li>
        </ul>
      )}
    </div>
  );
}

export default PokeDetails;
