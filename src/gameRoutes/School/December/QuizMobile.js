import React, { useState } from "react";
import { connect } from "react-redux";

import GameQuestion from "../../../components/game/GameQuestion";

import { updateEspecializationAction } from "../../../redux/game/actions";

const QuizMobile = ({ setMobileAsEsp, changeEsp }) => {
  const [correctAnswersMB, setCorrectAnswersMB] = useState(0);
  const [wrongAnswersMB, setWrongAnswersMB] = useState(0);

  const [isQ1Solved, setIsQ1Solved] = useState(false);
  const [isQ2Solved, setIsQ2Solved] = useState(false);
  const [isQ3Solved, setIsQ3Solved] = useState(false);
  const [areAllSolved, setAreAllSolved] = useState(false);

  return (
    <>
      {isQ1Solved ? null : (
        <Question1
          correctAnswer={() => {
            setIsQ1Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ1Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      )}
      {isQ1Solved && !isQ2Solved ? (
        <Question2
          correctAnswer={() => {
            setIsQ2Solved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ2Solved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      ) : null}
      {isQ2Solved && !isQ3Solved ? (
        <Question3
          correctAnswer={() => {
            setIsQ3Solved(true);
            setAreAllSolved(true);
            setCorrectAnswersMB(correctAnswersMB + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setAreAllSolved(true);
            setWrongAnswersMB(wrongAnswersMB + 1);
          }}
        />
      ) : null}
      {areAllSolved && correctAnswersMB > wrongAnswersMB && (
        <>
          {" "}
          <p>You passed the Mobile Test! Congratulations!!!</p>
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <button onClick={() => setMobileAsEsp("Mobile")}>
              I want to be a Mobile Developer.
            </button>
            <button onClick={changeEsp}>I want to try another test.</button>
          </div>
        </>
      )}
      {areAllSolved && correctAnswersMB < wrongAnswersMB && (
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
      question="Which one of these isn't made for mobile development?"
      op1="Kotlin"
      op2="React Native"
      op3="React"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
    />
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How are view elements identified in the Android program?"
      op1="findViewById keyword"
      op2='view("elementName")'
      op3='elementSee("name")'
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
    />
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the database used in Android apps?"
      op1="MariaDB"
      op2="MongoDB"
      op3="SQLite"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setMobileAsEsp: esp => dispatch(updateEspecializationAction(esp))
});

export default connect(undefined, mapDispatchToProps)(QuizMobile);
