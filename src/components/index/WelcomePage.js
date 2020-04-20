import React from "react";

import Image from "../Image";
import logoLife from "../../images/logoLife.png";

const WelcomePage = ({ name, handleClick }) => {
  return (
    <div id="successLogin">
      <button id="signOut" onClick={handleClick}>Sign out!</button>
      <Image imageSrc={logoLife} alt="Logo" cName="LogoLife"/> 
      <p id="welcome">Welcome {name} </p>
      <div className="buttonContainer">
        <button className="mainButtons">Play Game</button>
        <button className="mainButtons">The Minders</button>
      </div>
      <footer>
        <p>All Rights Reserved to Mindera School 2019/2020</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
