import React from "react";
import { useParams } from "react-router-dom";

function BaseInfo({ pokemons, isLoading }, props) {
  const { id, info } = useParams();

  const onePokemon = pokemons[id];
  //console.log(id);
  let information = "";
  if (info === "type") {
    information = "type";
  } else if (info === "name") {
    information = "name";
  } else if (info === "base") {
    information = "base";
  } else {
    console.error("error");
  }

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {pokemons.length > 0 && (
        <ul className="pokemonDetails">
          {information}
          {info === "type" ? `${info} : ${onePokemon[info]}` : " "}
          {info === "base" ? ` ${JSON.stringify(onePokemon.base)}` : " "}
          {info === "name" ? ` ${JSON.stringify(onePokemon.name)}` : " "}
        </ul>
      )}
    </div>
  );
}

export default BaseInfo;
