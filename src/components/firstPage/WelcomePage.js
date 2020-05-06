import React from "react";
import { Link, withRouter } from "react-router-dom";

import Image from "../utils/Image";
import Footer from "../utils/Footer";

const WelcomePage = ({ name, handleClick, history, image }) => {
  return (
    <div id="successLogin">
      <button id="signOut" onClick={handleClick}>
        Sign out!
      </button>

      <Image imageSrc={image} alt="Logo" cName="LogoLife" />

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

      <Footer />
    </div>
  );
};

export default withRouter(WelcomePage);
