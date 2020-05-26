import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";

import QuizBackend from "../SchoolSeptember/QuizBackend";
import QuizFrontend from "../SchoolSeptember/QuizFrontend";
import QuizMobile from "../SchoolSeptember/QuizMobile";

const SchoolDecember = ({ gameDetails }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const [especialization, setEspecialization] = useState("");

  const renderQuiz = especialization => {
    switch (especialization) {
      case "Backend":
        return (
          <QuizBackend
            correct={correctAnswersBE}
            wrong={wrongAnswersBE}
            setCorrect={() => setCorrectAnswersBE(correctAnswersBE + 1)}
            setWrong={() => setWrongAnswersBE(wrongAnswersBE + 1)}
          />
        );
      case "Frontend":
        return (
          <QuizFrontend
          />
        );
      case "Mobile":
        return (
          <QuizMobile
            correct={correctAnswersMB}
            wrong={wrongAnswersMB}
            setCorrect={() => setCorrectAnswersMB(correctAnswersMB + 1)}
            setWrong={() => setWrongAnswersMB(wrongAnswersMB + 1)}
          />
        );
      default:
        return "<h1>Don't Know</h1>";
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
            width: "70%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <button onClick={() => setEspecialization("Frontend")}>
            Frontend
          </button>
          <button onClick={() => setEspecialization("Backend")}>Backend</button>
          <button onClick={() => setEspecialization("Mobile")}>Mobile</button>
          <button onClick={() => setEspecialization("Need Help")}>
            I can't decide
          </button>
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
