import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // const [caught, setCaught] = useState(0);
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    // const randomPokemon = [
    //   "Bulbasaur",
    //   "Ivysaur",
    //   "Venusaur",
    //   "Charmander",
    //   "Charmeleon",
    //   "Charizard",
    //   "Squirtle",
    //   "Wartortle",
    //   "Blastoise",
    // ];
    // let catchRandomPokemon = randomPokemon[Math.floor(Math.random() * randomPokemon.length)];
    // console.log(catchRandomPokemon);
    // // setCaught(caught + 1);
    setCaught(caught.concat(pokemonNameInput));
    // setCaught(pokemonNameInput.push(catchRandomPokemon));
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
        {caught.map((pokemon) => (
         <li>{pokemon}</li>
        ))}
      </ul>

      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <button onClick={() => setCaught([])}>Reset</button>
    </div>
  );
};

export default CaughtPokemon;
