import React, { useState } from "react";

const QuizBackend = ({ correct, wrong, setCorrect, setWrong }) => {
  const [correctAnswersBE, setCorrectAnswersBE] = useState(0);
  const [wrongAnswersBE, setWrongAnswersBE] = useState(0);

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
            setAreAllSolved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setAreAllSolved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      ) : null}
    </>
  );
};

const Question1 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which one is a BE language?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>jQuery</button>
        <button onClick={correctAnswer}>Python</button>
        <button onClick={wrongAnswer}>PinãColada</button>
      </div>
    </div>
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>In Java, which data type doesn't exist?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>String</button>
        <button onClick={correctAnswer}>Number</button>
        <button onClick={wrongAnswer}>Boolean</button>
      </div>
    </div>
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Is Java pass-by-reference or pass-by-value?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>Reference</button>
        <button onClick={wrongAnswer}>Value</button>
        <button onClick={correctAnswer}>Both</button>
      </div>
    </div>
  );
};

export default QuizBackend;
