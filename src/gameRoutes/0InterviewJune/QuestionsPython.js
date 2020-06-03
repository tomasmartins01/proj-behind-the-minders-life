import React from "react";
import { connect } from "react-redux";

import GameQuestion from "../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction
} from "../../redux/game/actions";

const PythonQuestions = ({
  questionId,
  correctAnswer,
  wrongAnswer,
  timestamps,
  skillsLevel,
  updatePythonSkills
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstPythonQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePythonSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondPythonQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePythonSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdPythonQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePythonSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthPythonQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePythonSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which one of these isn’t a conversion type?"
      op1="ord()"
      op2="arr()"
      op3="oct()"
      op4="list()"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const SecondPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the function to return the number of items of an object?"
      op1="len(var)"
      op2="size(var)"
      op3="length(var)"
      op4="lastIndex(var)"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const ThirdPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How do negative indexes work in Python?"
      op1="They doesn’t exist"
      op2="They work the same as positive indexes"
      op3="They start from the last index in the sequence"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
    />
  );
};

const FourthPythonQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which function doesn’t add items to an array?"
      op1="append()"
      op2="insert()"
      op3="add()"
      op4="extend()"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps,
    skillsLevel: state.game.gameInfo.skillsLevel
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
    ),
  updatePythonSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, pythonSkills: 50 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(PythonQuestions);
