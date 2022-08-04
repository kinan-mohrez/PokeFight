import React from "react";
import { useParams } from "react-router-dom";

function BaseInfo({ pokemons, isLoading }, props) {
  const { id, info } = useParams();

  const onePokemon = pokemons[id];
  //console.log(id);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {pokemons.length > 0 && (
        <ul className="pokemonDetails">
          {info === "type" ? `${info} : ${onePokemon[info]}` : " "}
          {info === "base"
            ? ` ${JSON.stringify(onePokemon.base, null, " ")}`
            : "test "}
          {info === "name"
            ? ` ${JSON.stringify(onePokemon.name, null, " ")}`
            : "test "}
        </ul>
      )}
    </div>
  );
}

export default BaseInfo;
