import React, { useState } from "react";



const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  // const catchPokemon = () => {
// const randomPokemon = ["Bulbasaur", "Ivysaur", "Venusaur","Charmander","Charmeleon","Charizard","Squirtle", "Wartortle", "Blastoise"];
// let catchRandomPokemon = randomPokemon[(Math.random() * randomPokemon.length) | 0]
//   setCaught(caught.concat(catchRandomPokemon);
//   };
  return (
    <div>
  <p>Caught {caught.length} Pokemon on {props.date}</p>
  <ul>
    {
    caught.map( (pokemon) => (<li>{pokemon}</li>) )
    }
  </ul>

  {/* <button onClick = {catchPokemon} >Add</button> */}
  <button onClick = {() => setCaught([])}>Reset</button>
  </div>
  );
};


export default CaughtPokemon;