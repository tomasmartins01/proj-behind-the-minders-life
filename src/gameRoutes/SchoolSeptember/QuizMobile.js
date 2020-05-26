import React, { useState } from "react";

const QuizMobile = ({ correct, wrong, setCorrect, setWrong }) => {
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
    </>
  );
};

const Question1 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which one of these isn't made for mobile development?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>Kotlin</button>
        <button onClick={wrongAnswer}>React Native</button>
        <button onClick={correctAnswer}>React</button>
      </div>
    </div>
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How are view elements identified in the Android program?</p>
      <div className="buttonSelector">
        <button onClick={correctAnswer}>findViewById keyword</button>
        <button onClick={wrongAnswer}>view("elementName")</button>
        <button onClick={wrongAnswer}>elementSee("name")</button>
      </div>
    </div>
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>What is the database used in Android apps?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>MariaDB</button>
        <button onClick={wrongAnswer}>MongoDB</button>
        <button onClick={correctAnswer}>SQLite</button>
      </div>
    </div>
  );
};

export default QuizMobile;
