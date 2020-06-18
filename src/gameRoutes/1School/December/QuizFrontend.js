import React, { useState } from "react";
import { connect } from "react-redux";

import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateSpecializationAction,
  updateTimeBoxAction
} from "../../../redux/game/actions";

const QuizFrontend = ({
  timestamps,
  increaseCorrect,
  setFrontendAsEsp,
  changeEsp
}) => {
  const [correctAnswersFE, setCorrectAnswersFE] = useState(0);
  const [wrongAnswersFE, setWrongAnswersFE] = useState(0);

  const [isQ1Solved, setIsQ1Solved] = useState(false);
  const [isQ2Solved, setIsQ2Solved] = useState(false);
  const [isQ3Solved, setIsQ3Solved] = useState(false);
  const [areAllSolved, setAreAllSolved] = useState(false);

  const setFinalCorrect = number => {
    increaseCorrect({
      ...timestamps,
      schoolDec: { ...timestamps.schoolDec, correctAnswersFE: number }
    });
  };

  return (
    <>
      {isQ1Solved ? null : (
        <Question1
          correctAnswer={() => {
            setIsQ1Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ1Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      )}
      {isQ1Solved && !isQ2Solved ? (
        <Question2
          correctAnswer={() => {
            setIsQ2Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ2Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      ) : null}
      {isQ2Solved && !isQ3Solved ? (
        <Question3
          correctAnswer={() => {
            setIsQ3Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
            setAreAllSolved(true);
            setFinalCorrect(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
            setAreAllSolved(true);
            setFinalCorrect(correctAnswersFE);
          }}
        />
      ) : null}
      {areAllSolved && correctAnswersFE > wrongAnswersFE && (
        <>
          <p>You passed the Frontend Test! Congratulations!!!</p>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <button onClick={() => setFrontendAsEsp("Frontend")}>
              I want to be a Frontend Developer.
            </button>
            <button onClick={changeEsp}>I want to try another test.</button>
          </div>
        </>
      )}
      {areAllSolved && correctAnswersFE < wrongAnswersFE && (
        <>
          <p>
            We are sorry to inform you but you didn't pass the Frontend test..
            Better luck next time!
          </p>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <button onClick={changeEsp}>I want to try another test.</button>
          </div>
        </>
      )}
    </>
  );
};

const Question1 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which one is not a tag?"
      op1="<header>"
      op2="<fieldset>"
      op3="<box>"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
    />
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="CSS property names are case sensitive."
      op1="True"
      op2="False"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
    />
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which array method allows you to add an element to your array?"
      op1="filter"
      op2="push"
      op3="map"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
    />
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  setFrontendAsEsp: esp => dispatch(updateSpecializationAction(esp)),
  increaseCorrect: timestamps => dispatch(updateTimeBoxAction(timestamps))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizFrontend);
