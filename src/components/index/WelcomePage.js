import React from "react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

import Image from "../Image";
import logoLife from "../../images/logoLife.png";

const WelcomePage = ({ name, handleClick }) => {
  return (
    <Router>

      <div id="successLogin">

        <button id="signOut" onClick={handleClick}>
          Sign out!
        </button>

        <Image imageSrc={logoLife} alt="Logo" cName="LogoLife" />

        <p id="welcome">Welcome {name} </p>

        <div className="buttonContainer">
          <button className="mainButtons">
            <Link to="/game">Play Game</Link>
          </button>

          <button className="mainButtons">
            <Link to="/minders">The Minders</Link>
          </button>
        </div>

        <footer>
          <p>All Rights Reserved to Mindera School 2019/2020</p>
        </footer>

      </div>

    </Router>
  );
};

export default withRouter(WelcomePage);
