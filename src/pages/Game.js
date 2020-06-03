import React, { useState } from "react";
import { connect } from "react-redux";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Profile from "../components/game/Profile";
import ProgressBars from "../components/game/ProgressBars";
import MindersPreview from "../components/game/MindersPreview";
import GameRoutes from "../gameRoutes";
import GameResume from "../gameRoutes/GameResume";

import "../styles/game-styles/gamePage.less";
import "../styles/game-styles/gameButton.less";
import "../styles/game-styles/gameArticle.less";
import "../styles/game-styles/gameMinders.less";

const Game = ({ formDetails, gameDetails }) => {
  document.title = "Game";

  const [dropdownValue, setDropdownValue] = useState("profile");

  return (
    <>
      <Header />
      <main className="gameParts">
        <div className="game">
          {gameDetails.isGameFinished ? <GameResume /> : <GameRoutes />}
        </div>
        <aside>
          <select
            className="dropdownGame"
            value={dropdownValue}
            onChange={e => setDropdownValue(e.target.value)}
          >
            <option value="profile">Profile</option>
            <option value="progress">Progress</option>
            <option value="minders">Minders</option>
          </select>
          <div className="valueDisplay">
            {dropdownValue === "profile" && (
              <Profile
                formDetails={formDetails}
                specialization={gameDetails.specialization}
                happiness={gameDetails.happiness}
                bankBalance={gameDetails.bankBalance}
              />
            )}
            {dropdownValue === "progress" && (
              <ProgressBars
                skills={gameDetails.skillsLevel}
                specialization={gameDetails.specialization}
                prevExperience={gameDetails.prevExperience}
              />
            )}
            {dropdownValue === "minders" && <MindersPreview />}
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    formDetails: state.form.formDetails,
    gameDetails: state.game.gameInfo,
    timestamps: state.game.gameInfo.timestamps
  };
};

export default connect(mapStateToProps)(Game);
