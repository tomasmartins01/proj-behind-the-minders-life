import React from "react";
import { connect } from "react-redux";

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
    <div className="gameQuestion">
      <p>What is the correct syntax to output "message" in C++?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>print —> "message"</button>
        <button onClick={wrongAnswer}>cout {">>"} "message"</button>
        <button onClick={correctAnswer}>cout {"<<"} "message"</button>
        <button onClick={wrongAnswer}>console ("message")</button>
      </div>
    </div>
  );
};

const SecondCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How do you create a reference variable of an existing variable?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>REF(var)</button>
        <button onClick={correctAnswer}>& operator</button>
        <button onClick={wrongAnswer}>* operator</button>
        <button onClick={wrongAnswer}>ref(var)</button>
      </div>
    </div>
  );
};

const ThirdCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which operator C++ doesn't support?</p>
      <button onClick={correctAnswer}>?</button>
      <button onClick={wrongAnswer}>%</button>
      <button onClick={wrongAnswer}>/</button>
      <button onClick={wrongAnswer}>+</button>
    </div>
  );
};

const FourthCPlusPlusQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>How to get a value from the console in C++?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>read {"<<"} x </button>
        <button onClick={wrongAnswer}>cin {">>"} x</button>
        <button onClick={wrongAnswer}>cin {"<<"} x</button>
        <button onClick={correctAnswer}>read {">>"} x</button>
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
  updateCPlusPlusSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, cplusplusSkills: 50 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(CPlusPlusQuestions);
