import React, { useState } from "react";
import { connect } from "react-redux";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Profile from "../components/game/Profile";
import ProgressBars from "../components/game/ProgressBars";
import MindersPreview from "../components/game/MindersPreview";

// Routes
import InterviewJune from "../gameRoutes/InterviewJune/index";

import "../styles/game-styles/gamePage.less";
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
          {gameDetails.isGameFinished ? <p>End</p> : <InterviewJune />}
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
                carrer={gameDetails.carrer}
                happiness={gameDetails.happiness}
                bankBalance={gameDetails.bankBalance}
              />
            )}
            {dropdownValue === "progress" && (
              <ProgressBars
                skills={gameDetails.skillsLevel}
                carrer={gameDetails.carrer}
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
    gameDetails: state.game.gameInfo
  };
};

export default connect(mapStateToProps)(Game);
