import React from "react";
import { connect } from "react-redux";

import GameQuestion from "../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction
} from "../../redux/game/actions";

const PHPQuestions = ({
  questionId,
  correctAnswer,
  wrongAnswer,
  timestamps,
  skillsLevel,
  updatePHPSkills
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstPHPQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePHPSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondPHPQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePHPSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdPHPQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePHPSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthPHPQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updatePHPSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How do you write “Hello World” in PHP?"
      op1="write(“Hello World”)"
      op2="print(“Hello World”)"
      op3="echo(“Hello World”)"
      op4="echo “Hello World”"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
    />
  );
};

const SecondPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How do you define a constant in PHP?"
      op1="define(x, 1)"
      op2="declare(x, 1)"
      op3="def(x, 1)"
      op4="const x = 1"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const ThirdPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How many data types are there in PHP?"
      op1="3"
      op2="8"
      op3="5"
      op4="4"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const FourthPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the correct way to declare an array?"
      op1="arr[“a”, “b”, “c”]"
      op2="arr(“a”, “b”, “c”)"
      op3="array(“a”, “b”, “c”)"
      op4="array((“a”), (“b”), (“c”))"
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
  updatePHPSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, phpSkills: 20 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(PHPQuestions);
