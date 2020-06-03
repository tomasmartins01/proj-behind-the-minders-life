import React from "react";
import { connect } from "react-redux";

import GameQuestion from "../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction
} from "../../redux/game/actions";

const JavaQuestions = ({
  questionId,
  correctAnswer,
  wrongAnswer,
  timestamps,
  skillsLevel,
  updateJavaSkills
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstJavaQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJavaSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondJavaQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJavaSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdJavaQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJavaSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthJavaQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJavaSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question='What is the use of "final" keyword?'
      op1="Write on method's last line"
      op2="Write on class' last line"
      op3="Restrict the modification of something"
      op4="Close program"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const SecondJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which data type is used to create a variable that should store text?"
      op1="Text"
      op2="String"
      op3="Txt"
      op4="TextVar"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const ThirdJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the correct code to run an infinite loop?"
      op1="for(;;) {...}"
      op2="for(int i = 0; i < infinity; i++) {...}"
      op3="for(; infinite ;) {...}"
      op4="for(; nonstop ;) {...}"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const FourthJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which one of these isn't a real access modifier?"
      op1="private"
      op2="protected"
      op3="public"
      op4="integred"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
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
  updateJavaSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, JavaSkills: 50 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(JavaQuestions);
