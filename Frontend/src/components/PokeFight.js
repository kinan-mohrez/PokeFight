import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Test({ pokemons, isLoading }, props) {
  const idLeft = 1;
  const idRight = 100;

  const [showResults, setShowResults] = useState(false);

  const leftName = pokemons[idLeft].name["english"];
  const leftId = pokemons["id"];
  const leftType1 = pokemons[idLeft].type[0];
  const leftType2 = pokemons[idLeft].type[1];
  const leftHP = pokemons[idLeft].base["HP"];
  const leftAttack = pokemons[idLeft].base["Attack"];
  const leftDefense = pokemons[idLeft].base["Defense"];
  const leftSpAttack = pokemons[idLeft].base["Sp. Attack"];
  const leftSpDefense = pokemons[idLeft].base["Sp. Defense"];
  const leftSpeed = pokemons[idLeft].base["Speed"];

  const rightName = pokemons[idRight].name["english"];
  const rightId = pokemons["id"];
  const rightType1 = pokemons[idRight].type[0];
  const rightType2 = pokemons[idRight].type[1];
  const rightHP = pokemons[idRight].base["HP"];
  const rightAttack = pokemons[idRight].base["Attack"];
  const rightDefense = pokemons[idRight].base["Defense"];
  const rightSpAttack = pokemons[idRight].base["Sp. Attack"];
  const rightSpDefense = pokemons[idRight].base["Sp. Defense"];
  const rightSpeed = pokemons[idRight].base["Speed"];

  const navigate = useNavigate();

  // starte Fight
  function handleClick(e) {
    e.preventDefault();
    console.log("klicked");
  }

  return (
    <div>
      <div className="wrapper">
        <div className="leftCard">
          <div>
            {isLoading && <p>Loading ...</p>}
            {pokemons.length > 0 && (
              <ul className="pokemonDetailsLeft">
                <li>
                  Pokedex Nr. {leftId} {idLeft}
                </li>
                <li>Name: {leftName} </li>
                <li>...</li>

                <li>
                  Type: {leftType1} {leftType2 ? `, ${leftType2}` : ``}
                </li>
                <li>HP: {leftHP} </li>
                <li>Attack: {leftAttack}</li>
                <li>Defense: {leftDefense}</li>
                <li>Sp. Attack: {leftSpAttack}</li>
                <li>Sp. Defense: {leftSpDefense}</li>
                <li>Speed: {leftSpeed}</li>
              </ul>
            )}
          </div>
        </div>
        <div className="middle">
          <Button
            variant="contained"
            size="large"
            color="error"
            id="fightButton"
            onClick={() => setShowResults((prev) => !prev)}
          >
            Start fight
          </Button>{" "}
          {showResults && (
            <>
              <ul className="pokemonDetailsRight">
                <li>...</li>
                <li>...</li>
                <li>...</li>
                <li>
                  {leftHP > rightHP
                    ? `1 : 0`
                    : leftHP < rightHP
                    ? `0 : 1`
                    : `1 : 1`}
                </li>
                <li>
                  {leftAttack > rightAttack
                    ? `1 : 0`
                    : leftAttack > rightAttack
                    ? `0 : 1`
                    : `1 : 1`}
                </li>
                <li>
                  {leftDefense > rightDefense
                    ? `1 : 0`
                    : leftDefense < rightDefense
                    ? `0 : 1`
                    : `1:1`}
                </li>
                <li>
                  {leftSpAttack > rightSpAttack
                    ? `1 : 0`
                    : leftSpAttack > rightSpAttack
                    ? `0 : 1`
                    : `1 : 1`}
                </li>
                <li>
                  {leftSpDefense > rightSpDefense
                    ? `1 : 0`
                    : leftSpDefense > rightSpDefense
                    ? `0 : 1`
                    : `1 : 1`}
                </li>
                <li>
                  {leftSpeed > rightSpeed
                    ? `1 : 0`
                    : leftSpeed > rightSpeed
                    ? `0 : 1`
                    : `1 : 1`}
                </li>
              </ul>
            </>
          )}
        </div>
        <div className="rightCard">
          <div>
            {isLoading && <p>Loading ...</p>}
            {pokemons.length > 0 && (
              <ul className="pokemonDetailsRight">
                <li>
                  Pokedex Nr. {rightId} {idRight}
                </li>
                <li>Name: {rightName} </li>
                <li>...</li>

                <li>
                  Type: {rightType1} {rightType2 ? `, ${rightType2}` : ``}
                </li>
                <li>HP: {rightHP} </li>
                <li>Attack: {rightAttack}</li>
                <li>Defense: {rightDefense}</li>
                <li>Sp. Attack: {rightSpAttack}</li>
                <li>Sp. Defense: {rightSpDefense}</li>
                <li>Speed: {rightSpeed}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Test;
