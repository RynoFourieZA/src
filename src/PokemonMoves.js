import React, { useEffect, useState } from "react";

function PokemonMoves(props) {
  //   let pokemonData = null;
  let [pokemonData, setPokemonData] = useState(null);
  let [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("What is this? ", data);
        setPokemonData(data);
      })
    .catch(() => {
      setErrorMessage("Oop's, something went wrong");
    });
  }, [props.pokemonId]);
  if(errorMessage) {
    return <p>{errorMessage}</p>;
  }
   return pokemonData ? (
    <div>
      <p>{pokemonData.name}'s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  ) : (
    <p>This pokemon does not have moves</p>
  );
}

export default PokemonMoves;
