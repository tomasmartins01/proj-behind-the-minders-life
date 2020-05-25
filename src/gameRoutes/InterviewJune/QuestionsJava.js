import React from "react";
import { connect } from "react-redux";

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
    <div className="gameQuestion">
      <p>What is the use of "final" keyword?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>Write on method's last line</button>
        <button onClick={wrongAnswer}>Write on class' last line</button>
        <button onClick={correctAnswer}>
          Restrict the modification of something
        </button>
        <button onClick={wrongAnswer}>Close program</button>
      </div>
    </div>
  );
};

const SecondJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>
        Which data type is used to create a variable that should store text?
      </p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>Text</button>
        <button onClick={correctAnswer}>String</button>
        <button onClick={wrongAnswer}>LongChar</button>
        <button onClick={wrongAnswer}>string</button>
      </div>
    </div>
  );
};

const ThirdJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>
        What is the correct code to run an infinite loop? (No variables declared
        before)
      </p>
      <button onClick={correctAnswer}>
        for({";"}
        {";"}) {"{…}"}
      </button>
      <button onClick={wrongAnswer}>
        for(int {"i = 0"}
        {";"} i {"<"} infinity{";"} {"i++"}) {"{…}"}
      </button>
      <button onClick={wrongAnswer}>
        for({";"} infinite{";"}) {"{…}"}
      </button>
      <button onClick={wrongAnswer}>
        for({";"} nonstop{";"} ) {"{…}"}
      </button>
    </div>
  );
};

const FourthJavaQuestion = ({ correctAnswer, wrongAnswer }) => {
  return (
    <div className="gameQuestion">
      <p>Which one of these isn't a real access modifier?</p>
      <div className="buttonSelector">
        <button onClick={wrongAnswer}>private</button>
        <button onClick={wrongAnswer}>protected</button>
        <button onClick={wrongAnswer}>public</button>
        <button onClick={correctAnswer}>integred</button>
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
  updateJavaSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        backend: { ...skillsLevel.backend, JavaSkills: 50 }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(JavaQuestions);
