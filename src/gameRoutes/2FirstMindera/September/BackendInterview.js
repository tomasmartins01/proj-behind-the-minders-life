import React, { useState } from "react";
import { connect } from "react-redux";

import GameQuestion from "../../../components/game/GameQuestion";
import {
  updateCareerAction,
  updateTimeBoxAction
} from "../../../redux/game/actions";

const BackendInterview = ({
  timestamps,
  interviewResult,
  setBackendAsCareer
}) => {
  const [correctAnswersBE, setCorrectAnswersBE] = useState(0);
  const [wrongAnswersBE, setWrongAnswersBE] = useState(0);

  const [isQ1Solved, setIsQ1Solved] = useState(false);
  const [isQ2Solved, setIsQ2Solved] = useState(false);
  const [isQ3Solved, setIsQ3Solved] = useState(false);
  const [isQ4Solved, setIsQ4Solved] = useState(false);
  const [isQ5Solved, setIsQ5Solved] = useState(false);
  const [isQ6Solved, setIsQ6Solved] = useState(false);
  const [isQ7Solved, setIsQ7Solved] = useState(false);
  const [areAllSolved, setAreAllSolved] = useState(false);

  return (
    <>
      {!isQ1Solved && (
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
      {isQ1Solved && !isQ2Solved && (
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
      )}
      {isQ2Solved && !isQ3Solved && (
        <Question3
          correctAnswer={() => {
            setIsQ3Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      )}
      {isQ3Solved && !isQ4Solved && (
        <Question4
          correctAnswer={() => {
            setIsQ4Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ4Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      )}
      {isQ4Solved && !isQ5Solved && (
        <Question5
          correctAnswer={() => {
            setIsQ5Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ5Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      )}
      {isQ5Solved && !isQ6Solved && (
        <Question6
          correctAnswer={() => {
            setIsQ6Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
          }}
          wrongAnswer={() => {
            setIsQ6Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
          }}
        />
      )}
      {isQ6Solved && !isQ7Solved && (
        <Question7
          correctAnswer={() => {
            setIsQ7Solved(true);
            setCorrectAnswersBE(correctAnswersBE + 1);
            setAreAllSolved(true);
            interviewResult({
              ...timestamps,
              minderaOneSep: {
                ...timestamps.minderaOneSep,
                passedTheInterview: correctAnswersBE > wrongAnswersBE
              }
            });
          }}
          wrongAnswer={() => {
            setIsQ7Solved(true);
            setWrongAnswersBE(wrongAnswersBE + 1);
            setAreAllSolved(true);
            interviewResult({
              ...timestamps,
              minderaOneSep: {
                ...timestamps.minderaOneSep,
                passedTheInterview: correctAnswersBE > wrongAnswersBE
              }
            });
          }}
        />
      )}
    </>
  );
};

const Question1 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the difference between Linear Search and Binary Search?"
      op1="Binary search requires the input data to be sorted, linear search doesn't"
      op2="Binary search requires equality comparison, linear search requires ordering comparison"
      op3="Binary search requires sequential access, linear search requires random access to the data"
      op4="Binary search has complexity O(n), linear search has complexity O(log n)"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which of the following is not a valid HTTP method?"
      op1="GET"
      op2="POST"
      op3="PUT"
      op4="HEADER"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
    />
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is class variable?"
      op1="Class variables are static variables within a class but outside any method"
      op2="Class variables are variables defined inside methods, constructors or blocks."
      op3="Class variables are variables within a class but outside any method"
      op4="None of the above"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question4 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is function overriding?"
      op1="If a subclass uses a method that is already provided by its parent class"
      op2="If a subclass provides a specific implementation of a method that's already provided by its parent class"
      op3="Both of the above"
      op4="None of the above"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question5 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the default value of byte variable?"
      op1="0"
      op2="0.0"
      op3="null"
      op4="undefined"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question6 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Deletion is faster in LinkedList than ArrayList."
      op1="True"
      op2="False"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
    />
  );
};

const Question7 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What invokes a thread's run() method?"
      op1="Main application running the thread"
      op2="JVM invokes the thread's run() method when the thread is initially executed"
      op3="start() method of the thread class"
      op4="None of the above"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  interviewResult: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  setBackendAsCareer: career => dispatch(updateCareerAction(career))
});

export default connect(mapStateToProps, mapDispatchToProps)(BackendInterview);
