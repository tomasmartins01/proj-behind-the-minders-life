import React from "react";
import { connect } from "react-redux";

import { updateTimeBoxAction } from "../../redux/game/actions";

const PythonQuestions = ({
  timestamps,
  correctAnswer,
  wrongAnswer,
  questionId
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstPythonQuestion
          correctAnswer={() => correctAnswer(timestamps)}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondPythonQuestion
          correctAnswer={() => correctAnswer(timestamps)}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdPythonQuestion
          correctAnswer={() => correctAnswer(timestamps)}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthPythonQuestion
          correctAnswer={() => correctAnswer(timestamps)}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which one of these isn’t a conversion type?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>ord()</button>
        <button onClick={correctAnswer}>arr()</button>
        <button onClick={wrongAnswer}>oct()</button>
        <button onClick={wrongAnswer}>list()</button>
      </div>
    </div>
  );
};

const SecondPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>What is the function to return the number of items of an object?</p>
      <div className="buttonSelector">
        <button onClick={correctAnswer}>len(var)</button>
        <button onClick={wrongAnswer}>size(var)</button>
        <button onClick={wrongAnswer}>length(var)</button>
        <button onClick={wrongAnswer}>lastIndex(var)</button>
      </div>
    </div>
  );
};

const ThirdPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How do negative indexes work?</p>
      <button onClick={wrongAnswer}>They doesn’t exist</button>
      <button onClick={wrongAnswer}>
        They work the same as positive indexes
      </button>
      <button onClick={correctAnswer}>
        They start from the last index in the sequence
      </button>
    </div>
  );
};

const FourthPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which function doesn’t add items to an array?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>append()</button>
        <button onClick={wrongAnswer}>insert()</button>
        <button onClick={correctAnswer}>add()</button>
        <button onClick={wrongAnswer}>extend()</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  correctAnswer: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        interviewJune: {
          ...timestamps.interviewJune,
          characterPassedTheInterview: true
        }
      })
    ),
  wrongAnswer: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        interviewJune: {
          ...timestamps.interviewJune,
          characterPassedTheInterview: false
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(PythonQuestions);
