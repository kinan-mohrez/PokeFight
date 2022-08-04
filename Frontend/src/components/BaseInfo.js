import React from "react";
import { useParams } from "react-router-dom";

function BaseInfo({ pokemons, isLoading }, props) {
  const { pokeId, pokeInfo } = useParams();

  const onePokemon = pokemons[pokeId];
  console.log(pokeId);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {pokemons.length > 0 && (
        <ul className="pokemonDetails">
          <li>Pokedex Nr. {pokeId}</li>
          <li>Name: {onePokemon.name["english"]} </li>
          <li>...</li>

          <li>
            Type: {onePokemon.type[0]}{" "}
            {onePokemon.type[1] ? `, ${onePokemon.type[1]}` : ``}
          </li>
          <li></li>
        </ul>
      )}
    </div>
  );
}

export default BaseInfo;
