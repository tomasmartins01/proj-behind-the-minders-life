import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateCareerAction,
  updateTimeBoxAction
} from "../../../redux/game/actions";
import GameQuestion from "../../../components/game/GameQuestion";

const FrontendInterview = ({
  timestamps,
  interviewResult,
  setFrontendAsCareer
}) => {
  const [correctAnswersFE, setCorrectAnswersFE] = useState(0);
  const [wrongAnswersFE, setWrongAnswersFE] = useState(0);

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
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ1Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      )}
      {isQ1Solved && !isQ2Solved && (
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
      )}

      {isQ2Solved && !isQ3Solved && (
        <Question3
          correctAnswer={() => {
            setIsQ3Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ3Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      )}

      {isQ3Solved && !isQ4Solved && (
        <Question4
          correctAnswer={() => {
            setIsQ4Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ4Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      )}
      {isQ4Solved && !isQ5Solved && (
        <Question5
          correctAnswer={() => {
            setIsQ5Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ5Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      )}
      {isQ5Solved && !isQ6Solved && (
        <Question6
          correctAnswer={() => {
            setIsQ6Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
          }}
          wrongAnswer={() => {
            setIsQ6Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
          }}
        />
      )}

      {isQ6Solved && !isQ7Solved && (
        <Question7
          correctAnswer={() => {
            setIsQ7Solved(true);
            setCorrectAnswersFE(correctAnswersFE + 1);
            setAreAllSolved(true);
            interviewResult({
              ...timestamps,
              minderaOneSep: {
                ...timestamps.minderaOneSep,
                passedTheInterview: correctAnswersFE > wrongAnswersFE
              }
            });
          }}
          wrongAnswer={() => {
            setIsQ7Solved(true);
            setWrongAnswersFE(wrongAnswersFE + 1);
            setAreAllSolved(true);
            interviewResult({
              ...timestamps,
              minderaOneSep: {
                ...timestamps.minderaOneSep,
                passedTheInterview: correctAnswersFE > wrongAnswersFE
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
      question="What is the difference between span and div?"
      op1="span is a type of ketchup and div is mayonnaise"
      op2="span is a block element and div is inline element."
      op3="div is a block element and span is inline element."
      op4="span is used for text only and div is for all elements"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question2 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question='What is the result of the following: Number("1") - 1 == 0;'
      op1="true"
      op2="false"
      op3="undefined"
      op4="0"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const Question3 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the result of the following: (true + false) > 2 + true;"
      op1="false"
      op2="true"
      op3="NaN"
      op4="TypeError"
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
      question='What is the result of the following: "1" - - "1";'
      op1="0"
      op2="2"
      op3="11"
      op4='"11"'
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
      question="What are data-attributes good for?"
      op1="Create a way to not have to use classes and IDs for styling"
      op2="They aren't good because they are legacy attributes that are no longer used	in HTML5"
      op3="They are good for accessibility"
      op4="Provide the ability to embed custom data attributes on all HTML elements"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
    />
  );
};

const Question6 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Are CSS property names case-sensitive?"
      op1="Yes"
      op2="No"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
    />
  );
};

const Question7 = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Does setting margin-top and margin-bottom have an affect on an inline element?"
      op1="Yes"
      op2="No" 
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
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
  setFrontendAsCareer: career => dispatch(updateCareerAction(career))
});

export default connect(mapStateToProps, mapDispatchToProps)(FrontendInterview);
