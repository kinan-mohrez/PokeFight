import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

function Test({ pokemons, isLoading }, props) {
  const idLeft = 1;
  const idRight = 100;

  const [showResults, setShowResults] = useState(false);
  const [calcResults, setCalcResults] = useState(false);
  let [showWinner, setShowWinner] = useState("");

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

  // starte Fight
  function handleClick(e) {
    e.preventDefault();
    setShowResults((prev) => !prev);
    setCalcResults((prev) => !prev);
    //console.log("klicked");
    if (!calcResults) {
      getResult();
    }
  }

  function getResult() {
    let pointsPokemonLeft = 0;
    let pointsPokemonRight = 0;
    if (leftHP > rightHP) {
      pointsPokemonLeft += 1;
    } else if (leftHP < rightHP) {
      pointsPokemonRight += 1;
    }
    if (leftAttack > rightAttack) {
      pointsPokemonLeft += 1;
    } else if (leftAttack < rightAttack) {
      pointsPokemonRight += 1;
    }
    if (leftDefense > rightDefense) {
      pointsPokemonLeft += 1;
    } else if (leftDefense < rightDefense) {
      pointsPokemonRight += 1;
    }
    if (leftSpAttack > rightSpAttack) {
      pointsPokemonLeft += 1;
    } else if (leftSpAttack < rightSpAttack) {
      pointsPokemonRight += 1;
    }
    if (leftSpDefense > rightSpDefense) {
      pointsPokemonLeft += 1;
    } else if (leftSpDefense < rightSpDefense) {
      pointsPokemonRight += 1;
    }
    if (leftSpeed > rightSpeed) {
      pointsPokemonLeft += 1;
    } else if (leftSpeed < rightSpeed) {
      pointsPokemonRight += 1;
    }

    if (pointsPokemonLeft > pointsPokemonRight) {
      console.log(`Pokemon on the left wins`);
      setShowWinner("left");
    } else if (pointsPokemonLeft < pointsPokemonRight) {
      setShowWinner("right");
    } else {
      setShowWinner("");
    }
  }

  return (
    <div>
      <div className="wrapper">
        <div>
          <h3>Choose your Pokemon</h3>
          <input type="text" placeholder="put in the pokemon id"></input>
        </div>
        <div></div>
        <div>
          <h3>Choose your opponent</h3>
        </div>
      </div>
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
            onClick={handleClick}
          >
            Start fight
          </Button>{" "}
          {showResults && (
            <>
              <ul className="pokemonDetailsMiddle">
                <li>
                  {showWinner === "left"
                    ? "Pokemon on the left wins"
                    : showWinner === "right"
                    ? "Pokemon on the right wins"
                    : "There is no winner."}
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
