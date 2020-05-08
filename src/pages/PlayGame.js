import React from "react";
import { Link, withRouter } from "react-router-dom";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import PlayerForm from "../components/game/PlayerForm";

import "../styles/reset.less";
import "../styles/game-styles/gameForm.less";

const PlayGame = () => {
  document.title = "Create Your Character";
  return (
    <div className="GameForm">
      <Header />
      <main>
        <section>
          <div className="form">
            <PlayerForm />
          </div>
          <div className="avatar"></div>
        </section>
        <div id="button-container">
          <Link to="/game">
            <button className="start">Start Life</button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayGame;
