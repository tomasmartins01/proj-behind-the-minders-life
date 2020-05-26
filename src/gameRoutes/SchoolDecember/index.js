import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";

import QuizBackend from "./QuizBackend";
import QuizFrontend from "./QuizFrontend";
import QuizMobile from "./QuizMobile";

const SchoolDecember = ({ gameDetails }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const [especialization, setEspecialization] = useState("");

  const renderQuiz = especialization => {
    switch (especialization) {
      case "Backend":
        return <QuizBackend />;
      case "Frontend":
        return <QuizFrontend />;
      case "Mobile":
        return <QuizMobile />;
    }
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        Congratulations! You concluded the first three months of Mindera School.
      </p>
      {!gameDetails.especialization && (
        <p>
          Now it´s time for you to choose what especialization path you will
          follow!
        </p>
      )}

      {especialization ? (
        renderQuiz(especialization)
      ) : (
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button onClick={() => setEspecialization("Frontend")}>
            Frontend
          </button>
          <button onClick={() => setEspecialization("Backend")}>Backend</button>
          <button onClick={() => setEspecialization("Mobile")}>Mobile</button>
        </div>
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    timestamps: state.game.gameInfo.timestamps
  };
};

export default connect(mapStateToProps)(SchoolDecember);
