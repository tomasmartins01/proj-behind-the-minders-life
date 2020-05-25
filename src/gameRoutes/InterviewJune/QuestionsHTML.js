import React from "react";
import { connect } from "react-redux";

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
    <div className="gameQuestion">
      <p>What is the correct option for creating a hyperlink?</p>
      <div className="buttonSelector">
        <button onClick={correctAnswer}>
          {"<a href='link'>some text</a>"}
        </button>
        <button onClick={wrongAnswer}>{"<a url='link'>some text</a>}"}</button>
        <button onClick={wrongAnswer}>
          {"<link url='link'>some text</a>"}
        </button>
        <button onClick={wrongAnswer}>
          {"<a hrefto='link'>some text</a>"}
        </button>
      </div>
    </div>
  );
};

const SecondHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>
        Which attribute is used to specify that an input must be filled out?
      </p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>needValue</button>
        <button onClick={correctAnswer}>required</button>
        <button onClick={wrongAnswer}>mustHaveValue</button>
        <button onClick={wrongAnswer}>requiresValue</button>
      </div>
    </div>
  );
};

const ThirdHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which one of these isn't an input type?</p>
      <button onClick={wrongAnswer}>checkbox</button>
      <button onClick={wrongAnswer}>search</button>
      <button onClick={wrongAnswer}>date</button>
      <button onClick={correctAnswer}>calendar</button>
    </div>
  );
};

const FourthHtmlQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which tag do you use for insert a page inside your page?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>insert</button>
        <button onClick={wrongAnswer}>include</button>
        <button onClick={correctAnswer}>iframe</button>
        <button onClick={wrongAnswer}>inside</button>
      </div>
    </div>
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
