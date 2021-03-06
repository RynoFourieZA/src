import React from "react";
import BestPokemon from "./BestPokemon";
import Logo from "./Logo";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const App = () => {
 return (
  <div>
    <Logo appName="Pokedex"/>
    <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]}/>
    <CaughtPokemon date = {new Date().toLocaleDateString() }/>
    <PokemonMovesSelector />
    <PokemonCity />
  </div>);
};

export default App;