import React from "react";


const Logo = (props) => {
  console.log(props);

  function logWhenClicked() {
 console.log("Is it a bird or a plane?");

  }

  return (
    <header>
      <h1>Welcome to {props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" onClick={logWhenClicked} alt="on click show text"></img>
    </header>
  );

};



export default Logo;