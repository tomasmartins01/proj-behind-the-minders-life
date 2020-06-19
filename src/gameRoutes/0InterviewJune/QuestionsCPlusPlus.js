import React from "react";
import { connect } from "react-redux";

import GameQuestion from "../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction
} from "../../redux/game/actions";

const CPlusPlusQuestions = ({
  questionId,
  correctAnswer,
  wrongAnswer,
  timestamps,
  skillsLevel,
  updateCPlusPlusSkills
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstCPlusPlusQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateCPlusPlusSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondCPlusPlusQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateCPlusPlusSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdCPlusPlusQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateCPlusPlusSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthCPlusPlusQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateCPlusPlusSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question='What is the correct syntax to output "message" in C++?'
      op1='print —> "message"'
      op2='cout >> "message"'
      op3='cout << "message"'
      op4='console ("message")'
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const SecondCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How do you create a reference variable of an existing variable?"
      op1="REF(var)"
      op2="& operator"
      op3="* operator"
      op4="ref(var)"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const ThirdCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which operator C++ doesn't support?"
      op1="?"
      op2="%"
      op3="/"
      op4="+"
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const FourthCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="How to get a value from the console in C++?"
      op1="read << x"
      op2="cin >> x"
      op3="cin << x"
      op4="read >> x"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
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
  updateCPlusPlusSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, cplusplusSkills: 20 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(CPlusPlusQuestions);
