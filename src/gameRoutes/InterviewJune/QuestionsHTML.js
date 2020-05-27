import React from "react";
import { connect } from "react-redux";

import GameQuestion from "../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction
} from "../../redux/game/actions";

const HtmlQuestions = ({
  questionId,
  correctAnswer,
  wrongAnswer,
  timestamps,
  skillsLevel,
  updateHtmlSkills
}) => {
  return (
    <>
      {questionId === 0 && (
        <FirstHtmlQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateHtmlSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 1 && (
        <SecondHtmlQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateHtmlSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 2 && (
        <ThirdHtmlQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateHtmlSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}

      {questionId === 3 && (
        <FourthHtmlQuestion
          correctAnswer={() => {
            correctAnswer(timestamps);
            updateHtmlSkills(skillsLevel);
          }}
          wrongAnswer={() => wrongAnswer(timestamps)}
        />
      )}
    </>
  );
};

const FirstHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="What is the correct option for creating a hyperlink?"
      op1='<a href="link">some text</a>'
      op2='<a url="link">some text</a>'
      op3='<link url="link">some text</a>'
      op4='<a hrefto="link">some text</a>'
      onClickOp1={correctAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const SecondHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which attribute is used to specify that an input must be filled out?"
      op1="needValue"
      op2="required"
      op3="mustHaveValue"
      op4="requiresValue"
      onClickOp1={wrongAnswer}
      onClickOp2={correctAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={wrongAnswer}
    />
  );
};

const ThirdHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which one of these isn't an input type?"
      op1="checkbox"
      op2="search"
      op3="date"
      op4="calendar"
      onClickOp1={wrongAnswer}
      onClickOp2={wrongAnswer}
      onClickOp3={wrongAnswer}
      onClickOp4={correctAnswer}
    />
  );
};

const FourthHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <GameQuestion
      question="Which tag do you use for insert a page inside your page?"
      op1="insert"
      op2="include"
      op3="iframe"
      op4="inside"
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
  updateHtmlSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        frontend: { ...skillsLevel.frontend, htmlSkills: 50 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(HtmlQuestions);
