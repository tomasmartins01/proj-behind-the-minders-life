import React, { useState } from "react";

const QuizFrontend = () => {
  const [correctAnswersFE, setCorrectAnswersFE] = useState(0);
  const [wrongAnswersFE, setWrongAnswersFE] = useState(0);

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
            setAreAllSolved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setAreAllSolved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      ) : null}
    </>
  );
};

const Question1 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which one is not a tag?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>
          {"<"}header{">"}
        </button>
        <button onClick={wrongAnswer}>
          {"<"}fieldset{">"}
        </button>
        <button onClick={correctAnswer}>
          {"<"}mouthbox{">"}
        </button>
      </div>
    </div>
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>CSS property names are case sensitive.</p>
      <div className="buttonSelector">
        <button onClick={correctAnswer}>False</button>
        <button onClick={wrongAnswer}>True</button>
      </div>
    </div>
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which array method allows you to add an element to your array?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>Filter</button>
        <button onClick={correctAnswer}>Push</button>
        <button onClick={wrongAnswer}>Map</button>
      </div>
    </div>
  );
};

export default QuizFrontend;
