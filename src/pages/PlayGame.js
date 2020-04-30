import React from "react";
import { Link, withRouter } from "react-router-dom";

import HeaderWithImage from "../components/utils/HeaderWithImage";
import Footer from "../components/utils/Footer";
import PlayerForm from "../components/game/PlayerForm";

import "../styles/reset.less";
import "../styles/game-styles/gameForm.less";

const PlayGame = () => {
  document.title = "Create Your Character";
  return (
    <>
      <HeaderWithImage />
      <main>
        <section>
          <div className="form">
            <PlayerForm />
          </div>
          <div className="avatar">avatar</div>
        </section>
        <div id="button-container">
          <Link to="/game">
            <button>Start Life</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default withRouter(PlayGame);
