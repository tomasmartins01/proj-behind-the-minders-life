import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";
import StoryOptions from "../../components/game/StoryOptions";
import {
  endGameAction,
  setPrevExperienceAction
} from "../../redux/game/actions";

import PythonQuestions from "./QuestionsPython";

const InterviewJune = ({
  formDetails,
  gameDetails,
  endGame,
  setExperience
}) => {
  const [selectValue, setSelectValue] = useState("C++");
  const [questionNumber] = useState(Number((Math.random() * 3).toFixed()));

  const renderQuestion = languageWithNumber => {
    switch (languageWithNumber) {
      case "C++":
        return "C++";

      case "HTML":
        return "HTML";

      case "Java":
        return "Java";

      case "JavaScript":
        return "JavaScript";

      case "PHP":

      case "Python":
        return <PythonQuestions questionId={questionNumber} />;
    }
  };

  return (
    <StoryText hashtag={`#june${gameDetails.startingYear}`}>
      <p className="helloTitle">Hello {formDetails.fullName}!</p>
      <p>
        This interview will help us know if you have the characteristics and
        abilities we're looking for.
      </p>
      <div>
        {!gameDetails.prevExperience ? (
          <>
            <p>
              Tell me about your experience with coding... What language are you
              more confortable with?
            </p>
            <form>
              <select
                value={selectValue}
                onChange={e => setSelectValue(e.target.value)}
              >
                <option value="C++">C++</option>
                <option value="HTML">HTML</option>
                <option value="Java">Java</option>
                <option value="JavaScript">JavaScript</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
              </select>

              <button
                onClick={e => {
                  e.preventDefault();
                  setExperience(selectValue);
                }}
              >
                I'm ready for the question!
              </button>
            </form>
          </>
        ) : (
          <>
            <p>
              You told that you had experience in programming with{" "}
              {gameDetails.prevExperience}.
            </p>
            {gameDetails.timestamps.interviewJune
              .characterPassedTheInterview === undefined &&
              renderQuestion(`${selectValue}`)}
            {gameDetails.timestamps.interviewJune
              .characterPassedTheInterview && <p>Right Answer</p>}
            {gameDetails.timestamps.interviewJune
              .characterPassedTheInterview === false && <p>Wrong Answer</p>}
          </>
        )}
      </div>
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    formDetails: state.form.formDetails,
    gameDetails: state.game.gameInfo
  };
};

const mapDispatchToProps = dispatch => ({
  endGame: () => dispatch(endGameAction()),
  setExperience: exp => dispatch(setPrevExperienceAction(exp))
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewJune);
