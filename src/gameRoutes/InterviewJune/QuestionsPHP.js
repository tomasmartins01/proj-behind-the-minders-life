import React from "react";
import { connect } from "react-redux";

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
    <div className="gameQuestion">
      <p>How do you write “Hello World” in PHP?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>write(“Hello World”)</button>
        <button onClick={wrongAnswer}>print(“Hello World”)</button>
        <button onClick={wrongAnswer}>echo(“Hello World”)</button>
        <button onClick={correctAnswer}>echo “Hello World”</button>
      </div>
    </div>
  );
};

const SecondPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How do you define a constant in PHP?</p>
      <div className="buttonSelector">
        <button onClick={correctAnswer}>define(x, 1)</button>
        <button onClick={wrongAnswer}>declare(x, 1)</button>
        <button onClick={wrongAnswer}>def(x, 1)</button>
        <button onClick={wrongAnswer}>const x = 1</button>
      </div>
    </div>
  );
};

const ThirdPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How many data types are there in PHP?</p>
      <button onClick={wrongAnswer}>3</button>
      <button onClick={correctAnswer}>8</button>
      <button onClick={wrongAnswer}>4</button>
      <button onClick={wrongAnswer}>5</button>
    </div>
  );
};

const FourthPHPQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>What is the correct way to declare an array?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>arr[“a”, “b”, “c”]</button>
        <button onClick={wrongAnswer}>arr(“a”, “b”, “c”)</button>
        <button onClick={correctAnswer}>array(“a”, “b”, “c”)</button>
        <button onClick={wrongAnswer}>array((“a”), (“b”), (“c”))</button>
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
  updatePHPSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, phpSkills: 50 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(PHPQuestions);
