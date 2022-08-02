import React, { useState } from "react";

const Home = ({ pokemons, isLoading }) => {
  const [language, setLanguage] = useState("english");

  return (
    <div>
      <div className="btn-language">
        <label>Choose your language: </label>
        <input
          type="radio"
          value="english"
          name="language"
          onClick={() => setLanguage("english")}
        />
        english
        <input
          type="radio"
          value="japanese"
          name="language"
          onClick={() => setLanguage("japanese")}
        />
        japanese
        <input
          type="radio"
          value="chinese"
          name="language"
          onClick={() => setLanguage("chinese")}
        />
        chinese
        <input
          type="radio"
          value="french"
          name="language"
          onClick={() => setLanguage("french")}
        />
        french
      </div>
      {isLoading && <p>Loading ...</p>}
      {pokemons.length > 0 && (
        <ul className="poke-list">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name[`${language}`]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
