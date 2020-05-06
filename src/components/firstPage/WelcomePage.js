import React from "react";
import { Link, withRouter } from "react-router-dom";

import Image from "../utils/Image";
import logoLife from "../../images/logoLife.png";

const WelcomePage = ({ name, handleClick, history }) => {
  return (
    <div id="successLogin">
      <button id="signOut" onClick={handleClick}>
        Sign out!
      </button>

      <Image imageSrc={logoLife} alt="Logo" cName="LogoLife" />

      <p id="welcome">Welcome {name} </p>

      <div className="buttonContainer">
        <button className="mainButtons" onClick={() => history.push("/create")}>
          Play Game
        </button>

        <button
          className="mainButtons"
          onClick={() => history.push("/minders")}
        >
          The Minders
        </button>
      </div>

      <footer>
        <p>All Rights Reserved to Mindera School 2019/2020</p>
      </footer>
    </div>
  );
};

export default withRouter(WelcomePage);
