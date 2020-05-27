import React from "react";
import { connect } from "react-redux";

import GameQuestion from "../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction
} from "../../redux/game/actions";

const JavascriptQuestions = ({
  questionId,
  correctAnswer,
  wrongAnswer,
  timestamps,
  skillsLevel,
  updateJsSkills
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstJsQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJsSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondJsQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJsSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdJsQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJsSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthJsQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateJsSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question='What is the correct syntax for the referring to an external script
      called "xxx.js"?'
      op1='<script href="xxx.js" >'
      op2='<script file="xxx.js" >'
      op3='<script name="xxx.js" >'
      op4='<script src="xxx.js" >'
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
    />
  );
};

const SecondJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question='How do you call the function "f" in JavaScript?'
      op1="call function f"
      op2="call f"
      op3="f()"
      op4="call function f()"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={correctAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const ThirdJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which method can't add values to an array?"
      op1="concat"
      op2="join"
      op3="push"
      op4="splice"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const FourthJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which one is the correct way to convert a string with a number to number
      type?"
      op1='String.convert("1", 1)'
      op2='Number("1")'
      op3='String.getNumberValue("1")'
      op4='Number("1", 1)'
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
  updateJsSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        frontend: { ...skillsLevel.frontend, jsSkills: 50 }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JavascriptQuestions);
