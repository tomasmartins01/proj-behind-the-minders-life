import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";
import {
  endGameAction,
  setPrevExperienceAction,
  updateTimeBoxAction
} from "../../redux/game/actions";

import CPlusPlusQuestions from "./QuestionsCPlusPlus";
import HTMLQuestions from "./QuestionsHTML";
import JavaQuestions from "./QuestionsJava";
import JavaScriptQuestions from "./QuestionsJavaScript";
import PHPQuestions from "./QuestionsPHP";
import PythonQuestions from "./QuestionsPython";

const InterviewJune = ({
  formDetails,
  gameDetails,
  timestamps,
  setExperience,
  goToNext,
  endGame
}) => {
  const [selectValue, setSelectValue] = useState("C++");
  const [questionNumber] = useState(Number((Math.random() * 3).toFixed()));
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const renderQuestion = programmingLanguage => {
    switch (programmingLanguage) {
      case "C++":
        return <CPlusPlusQuestions questionId={questionNumber} />;

      case "HTML":
        return <HTMLQuestions questionId={questionNumber} />;

      case "Java":
        return <JavaQuestions questionId={questionNumber} />;

      case "JavaScript":
        return <JavaScriptQuestions questionId={questionNumber} />;

      case "PHP":
        return <PHPQuestions questionId={questionNumber} />;

      case "Python":
        return <PythonQuestions questionId={questionNumber} />;
    }
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p className="helloTitle">Hello {formDetails.fullName}!</p>
      {!gameDetails.prevExperience ? (
        <>
          <p>
            This interview will help us know if you have the characteristics and
            abilities we're looking for.
          </p>
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
              style={{ marginLeft: "20px" }}
            >
              I'm ready for the question!
            </button>
          </form>
        </>
      ) : (
        <>
          <p>
            You told that you had experience in programming with{" "}
            {gameDetails.prevExperience} in the interview.
          </p>
          {timestamps.interviewJune.characterPassedTheInterview === undefined &&
            renderQuestion(`${selectValue}`)}
          {timestamps.interviewJune.characterPassedTheInterview && (
            <>
              <div className="gameEmail">
                <p>From: info@school.mindera.com</p>
                <p>To: Me</p>
                <hr />
                <p>Hello {formDetails.fullName}!</p>
                <p>
                  Thank you for your interest in Mindera School and for the time
                  you have invested with us.
                </p>
                <p>
                  I apologize that we took too long to give you an answer. The
                  volume of applications only allowed us to finish the selection
                  process this week.
                </p>
                <p>So, the time has come to tell you:</p>

                <p id="congratulations">
                  WELCOME ABOARD! YOU ARE OFFICIALLY A MINDERNAUT !!!!!
                </p>
                <p>See you soon!!</p>
              </div>
              {!timestamps.interviewJune.isFinished && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    goToNext(gameDetails.timestamps);
                  }}
                >
                  NEXT
                </button>
              )}
            </>
          )}
          {timestamps.interviewJune.characterPassedTheInterview === false && (
            <>
              <div className="gameEmail">
                <p>From: info@school.mindera.com</p>
                <p>To: Me</p>
                <hr />
                <p>Hello {formDetails.fullName}!</p>
                <p>
                  Thank you for your interest in Mindera School and for the time
                  you have invested with us.
                </p>
                <p>
                  I apologize that we took too long to give you an answer. The
                  volume of applications only allowed us to finish the selection
                  process this week.
                </p>
                <p>
                  We're sorry but you were not selected for the{" "}
                  {gameDetails.startingYear} Mindera School Team.
                </p>
              </div>
              <button
                onClick={() => {
                  goToNext(gameDetails.timestamps);
                  endGame();
                }}
              >
                END
              </button>
            </>
          )}
        </>
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    formDetails: state.form.formDetails,
    gameDetails: state.game.gameInfo,
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  setExperience: exp => dispatch(setPrevExperienceAction(exp)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        interviewJune: {
          ...timestamps.interviewJune,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewJune);
