import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";

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
import "react-responsive-modal/styles.css";

const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalChangeToOpen = () => setIsModalOpen(true);
  const modalChangeToClosed = () => setIsModalOpen(false);
  return (
    <div className="gameRules">
      {!isModalOpen && (
        <button onClick={() => modalChangeToOpen()}>See rules</button>
      )}
      <Modal
        open={isModalOpen}
        onClose={() => modalChangeToClosed()}
        center
        styles={{ modal: { fontFamily: "Iceberg", width: "50%", borderRadius: "5px" } }}
      >
        <h2 style={{ borderBottom: "2px solid black", textAlign: "center" }}>
          Game Rules
        </h2>
        <p>If you go bankrupt you lose the game!</p>
        <hr />
        <p>
          Be careful, all the choices you make can lead you to an unexpected{" "}
          end...
        </p>
        <hr />
        <p>
          The only way to win the game is to reach the 5th year of Mindera,{" "}
          don't worry you will know if you won when you get there..
        </p>
        <hr />
        <p>I heard that the octopus is not very good in Porto ;)</p>
        <hr />
        <p>If you are caught not having fun you will also lose the game!</p>
        <hr />
        <p>Always watch out for traps!!</p>
      </Modal>
    </div>
  );
};

const Game = ({ formDetails, gameDetails }) => {
  document.title = "Game";

  const [dropdownValue, setDropdownValue] = useState("profile");

  return (
    <>
      <Header />
      <main className="gameParts">
        <Rules />
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
                specialization={
                  gameDetails.career
                    ? gameDetails.career
                    : gameDetails.specialization
                }
                happiness={gameDetails.happiness}
                bankBalance={gameDetails.bankBalance}
              />
            )}
            {dropdownValue === "progress" && (
              <ProgressBars
                skills={gameDetails.skillsLevel}
                specialization={
                  gameDetails.career
                    ? gameDetails.career
                    : gameDetails.specialization
                }
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
