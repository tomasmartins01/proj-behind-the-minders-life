import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import Image from "../utils/Image";
import Footer from "../utils/Footer";

const WelcomePage = ({
  name,
  handleClick,
  history,
  image,
  characterName,
  gameStatus
}) => {
  return (
    <div id="successLogin">
      <button id="signOut" onClick={handleClick}>
        Sign out!
      </button>

      <Image imageSrc={image} alt="Logo" cName="LogoLife" />

      <p id="welcome">Welcome {name} </p>

      <div className="buttonContainer">
        <button
          className="mainButtons"
          onClick={() =>
            characterName && !gameStatus
              ? history.push("/game")
              : history.push("/create")
          }
        >
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

const mapStateToProps = state => {
  return {
    characterName: state.form.formDetails.fullName,
    gameStatus: state.game.gameInfo.isGameFinished
  };
};

export default compose(withRouter, connect(mapStateToProps))(WelcomePage);
