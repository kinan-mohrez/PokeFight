import React from "react";
import "./components.css";
import { Routes, Route, useParams } from "react-router-dom";
import About from "../components/About";
import Test from "../components/Test";
import Home from "../components/Home";
import PokeDetails from "../components/PokeDetails";
import { useEffect, useState } from "react";

function Main() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  const fetchData = () => {
    fetch("./data/pokedex.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPokemons(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="main">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home pokemons={pokemons} isLoading={isLoading} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/:pokeId"
            element={<PokeDetails pokemons={pokemons} isLoading={isLoading} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
