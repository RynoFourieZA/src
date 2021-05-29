import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    const randomPokemon = [
      "Bulbasaur",
      "Ivysaur",
      "Venusaur",
      "Charmander",
      "Charmeleon",
      "Charizard",
      "Squirtle",
      "Wartortle",
      "Blastoise",
    ];
    let catchRandomPokemon = randomPokemon[Math.floor(Math.random() * randomPokemon.length)];
    console.log(catchRandomPokemon);
    setCaught(pokemonNameInput.push(catchRandomPokemon));
  };

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }
  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon) => {
         return  <div>
          {console.log("This is my pokemons: ", { pokemon })}
          <li>{pokemon}</li>
          </div>;
        })}
      </ul>

      <button onClick={catchPokemon}>Add</button>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={() => setCaught([])}>Reset</button>
    </div>
  );
};

export default CaughtPokemon;
