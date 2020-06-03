import React, { useState } from "react";
import { connect } from "react-redux";

import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateSpecializationAction,
  updateTimeBoxAction
} from "../../../redux/game/actions";

const QuizBackend = ({
  timestamps,
  increaseCorrect,
  setBackendAsEsp,
  changeEsp
}) => {
  const [correctAnswersBE, setCorrectAnswersBE] = useState(0);
  const [wrongAnswersBE, setWrongAnswersBE] = useState(0);

  const [isQ1Solved, setIsQ1Solved] = useState(false);
  const [isQ2Solved, setIsQ2Solved] = useState(false);
  const [isQ3Solved, setIsQ3Solved] = useState(false);
  const [areAllSolved, setAreAllSolved] = useState(false);

  const setFinalCorrect = number => {
    increaseCorrect({
      ...timestamps,
      schoolDec: { ...timestamps.schoolDec, correctAnswersBE: number }
    });
  };

  return (
    <>
      {isQ1Solved ? null : (
        <Question1
          correctAnswer={() => {
            setIsQ1Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ1Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      )}
      {isQ1Solved && !isQ2Solved ? (
        <Question2
          correctAnswer={() => {
            setIsQ2Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ2Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      ) : null}
      {isQ2Solved && !isQ3Solved ? (
        <Question3
          correctAnswer={() => {
            setIsQ3Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
            setAreAllSolved(true);
            setFinalCorrect(correctAnswersBE);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
            setAreAllSolved(true);
            setFinalCorrect(correctAnswersBE);
          }}
        />
      ) : null}
      {areAllSolved && correctAnswersBE > wrongAnswersBE && (
        <>
          <p>You passed the Backend Test! Congratulations!!!</p>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <button onClick={() => setBackendAsEsp("Backend")}>
              I want to be a Backend Developer.
            </button>
            <button onClick={changeEsp}>I want to try another test.</button>
          </div>
        </>
      )}
      {areAllSolved && correctAnswersBE < wrongAnswersBE && (
        <>
          <p>
            We are sorry to inform you but you didn't pass the test.. Better
            luck next time!
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
      question="Which one is a backend language?"
      op1="jQuery"
      op2="Python"
      op3="PinãColada"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
    />
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="In Java, which data type doesn't exist?"
      op1="String"
      op2="Number"
      op3="Boolean"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
    />
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Are Java arguments pass-by-reference or pass-by-value?"
      op1="Both"
      op2="Reference"
      op3="Value"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
    />
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  setBackendAsEsp: esp => dispatch(updateSpecializationAction(esp)),
  increaseCorrect: timestamps => dispatch(updateTimeBoxAction(timestamps))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizBackend);
