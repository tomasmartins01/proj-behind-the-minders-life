import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Image from "../Image";
import logoLife from "../../images/logoLife.png";

import PlayGame from "../../pages/PlayGame";
import TheMinders from "../../pages/TheMinders";

const WelcomePage = ({ name, handleClick }) => {
  return (
    <>
      <div id="successLogin">
        <button id="signOut" onClick={handleClick}>
          Sign out!
        </button>
        <Image imageSrc={logoLife} alt="Logo" cName="LogoLife" />
        <p id="welcome">Welcome {name} </p>
        <div className="buttonContainer">
          <Router>
            <Switch>
              <Route path="/game">
                {" "}
                <PlayGame />{" "}
              </Route>
              <Route path="/minders">
                <TheMinders />
              </Route>
            </Switch>
            <button className="mainButtons">
              <Link to="/game" target="_blank">
                Play Game
              </Link>
            </button>

            <button className="mainButtons">
              <Link to="/minders" target="_blank">
                The Minders
              </Link>
            </button>
          </Router>
        </div>
        <footer>
          <p>All Rights Reserved to Mindera School 2019/2020</p>
        </footer>
      </div>
    </>
  );
};

export default WelcomePage;
