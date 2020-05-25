import React from "react";
import { connect } from "react-redux";

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
    <div className="gameQuestion">
      <p>
        What is the correct syntax for the referring to an external script
        called "xxx.js"?
      </p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>{"<script href='xxx.js' >"}</button>
        <button onClick={wrongAnswer}>{"<script file='xxx.js' >"}</button>
        <button onClick={wrongAnswer}>{"<script name='xxx.js' >"}</button>
        <button onClick={correctAnswer}>{"<script src='xxx.js' > >"}</button>
      </div>
    </div>
  );
};

const SecondJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How do you call the function "f" in JavaScript?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>call function f</button>
        <button onClick={wrongAnswer}>call f</button>
        <button onClick={correctAnswer}>f()</button>
        <button onClick={wrongAnswer}>call function f()</button>
      </div>
    </div>
  );
};

const ThirdJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which method can't add values to an array?</p>
      <button onClick={wrongAnswer}>concat</button>
      <button onClick={correctAnswer}>join</button>
      <button onClick={wrongAnswer}>push</button>
      <button onClick={wrongAnswer}>splice</button>
    </div>
  );
};

const FourthJsQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>
        Which one is the correct way to convert a string with a number to number
        type?
      </p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>String.convert("1", 1)</button>
        <button onClick={correctAnswer}>Number("1") </button>
        <button onClick={wrongAnswer}>String.getNumberValue("1")</button>
        <button onClick={wrongAnswer}>Number("1", 1)</button>
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
