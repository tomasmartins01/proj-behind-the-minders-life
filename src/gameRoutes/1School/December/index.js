import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton, EndButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateSpecializationAction,
  updateBankBalanceAction,
  updateSkillsAction,
  updateHappinessAction,
  endGameAction
} from "../../../redux/game/actions";

import QuizBackend from "./QuizBackend";
import QuizFrontend from "./QuizFrontend";
import QuizMobile from "./QuizMobile";

const SchoolDecember = ({
  gameDetails,
  schoolDec,
  skillsLevel,
  updateSchoolDec,
  setEsp,
  increaseBalance,
  updateHappiness,
  setChristmasResponse,
  updateSkills,
  goToNext,
  endGame
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const [specialization, setspecialization] = useState("");

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...skillsLevel,
          socialSkills: 85,
          backend: {
            ...skillsLevel.backend,
            javaSkills: 40,
            sqlSkills: 40
          },
          frontend: {
            ...skillsLevel.frontend,
            htmlSkills: 40,
            cssSkills: 40,
            jsSkills: 40
          },
          mobile: {
            ...skillsLevel.mobile,
            kotlinSkills: 40
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...skillsLevel,
          socialSkills: 85,
          backend: {
            ...skillsLevel.backend,
            javaSkills: 60,
            sqlSkills: 60
          },
          frontend: {
            ...skillsLevel.frontend,
            htmlSkills: 50,
            cssSkills: 50,
            jsSkills: 50
          },
          mobile: {
            ...skillsLevel.mobile,
            kotlinSkills: 50
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...skillsLevel,
          socialSkills: 85,
          backend: {
            ...skillsLevel.backend,
            javaSkills: 50,
            sqlSkills: 50
          },
          frontend: {
            ...skillsLevel.frontend,
            htmlSkills: 50,
            cssSkills: 50,
            jsSkills: 50
          },
          mobile: {
            ...skillsLevel.mobile,
            kotlinSkills: 60
          }
        });
        break;
    }
  };

  const renderQuiz = specialization => {
    switch (specialization) {
      case "Backend":
        return (
          <QuizBackend
            changeEsp={() => {
              setspecialization("");
              updateSchoolDec({
                ...gameDetails.timestamps,
                schoolDec: { ...schoolDec, triedBackendQuiz: true }
              });
            }}
          />
        );

      case "Frontend":
        return (
          <QuizFrontend
            changeEsp={() => {
              setspecialization("");
              updateSchoolDec({
                ...gameDetails.timestamps,
                schoolDec: { ...schoolDec, triedFrontendQuiz: true }
              });
            }}
          />
        );

      case "Mobile":
        return (
          <QuizMobile
            changeEsp={() => {
              setspecialization("");
              updateSchoolDec({
                ...gameDetails.timestamps,
                schoolDec: { ...schoolDec, triedMobileQuiz: true }
              });
            }}
          />
        );
    }
  };

  const updateSocial = skillsLevel => {
    updateSkills({
      ...skillsLevel,
      socialSkills: 65
    });
  };

  const christmasResponse = (timestamps, value) => {
    setChristmasResponse({
      ...timestamps,
      schoolDec: {
        ...timestamps.schoolDec,
        wentToChristmasParty: value
      }
    });
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>I concluded the first three months of Mindera School.</p>
      {!gameDetails.specialization && (
        <p>Now it´s time to choose what specialization path I will follow!</p>
      )}
      {gameDetails.specialization ? (
        <>
          <p>I decided to be a {gameDetails.specialization} developer.</p>
        </>
      ) : specialization ? (
        renderQuiz(specialization)
      ) : (
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {schoolDec.triedBackendQuiz &&
          schoolDec.triedFrontendQuiz &&
          schoolDec.triedMobileQuiz ? (
            <>
              {/* Display buttons if user passed at least one quiz */}
              {schoolDec.quizNumberOfQuestions / 2 <=
                schoolDec.correctAnswersBE && (
                <button onClick={() => setEsp("Backend")}>
                  I choose Backend
                </button>
              )}
              {schoolDec.quizNumberOfQuestions / 2 <=
                schoolDec.correctAnswersFE && (
                <button onClick={() => setEsp("Frontend")}>
                  I choose Frontend
                </button>
              )}
              {schoolDec.quizNumberOfQuestions / 2 <=
                schoolDec.correctAnswersMB && (
                <button onClick={() => setEsp("Mobile")}>
                  I choose Mobile
                </button>
              )}

              {schoolDec.quizNumberOfQuestions / 2 >
                schoolDec.correctAnswersBE &&
                schoolDec.quizNumberOfQuestions / 2 >
                  schoolDec.correctAnswersFE &&
                schoolDec.quizNumberOfQuestions / 2 >
                  schoolDec.correctAnswersMB && (
                  <>
                    <p>
                      I failed all the tests and Sara Cardoso told me that my{" "}
                      journey in Mindera is over.
                    </p>
                    <EndButton
                      action={() => {
                        goToNext(gameDetails.timestamps);
                        endGame();
                      }}
                    />
                  </>
                )}
            </>
          ) : (
            <>
              <button
                onClick={() => setspecialization("Backend")}
                disabled={schoolDec.triedBackendQuiz}
              >
                Backend
              </button>
              <button
                onClick={() => setspecialization("Frontend")}
                disabled={schoolDec.triedFrontendQuiz}
              >
                Frontend
              </button>
              <button
                onClick={() => setspecialization("Mobile")}
                disabled={schoolDec.triedMobileQuiz}
              >
                Mobile
              </button>
            </>
          )}
        </div>
      )}
      {gameDetails.specialization &&
        schoolDec.wentToChristmasParty === undefined && (
          <>
            <p>Mindera is having a Christmas party.</p>
            <GameQuestion
              question="Should I go?"
              op1="Yes"
              op2="Im kinda busy..."
              onClickOp1={() => {
                updateHappiness(95);
                updateSocial(gameDetails.skillsLevel);
                christmasResponse(gameDetails.timestamps, true);
              }}
              onClickOp2={() => {
                updateHappiness(65);
                christmasResponse(gameDetails.timestamps, false);
              }}
            />
          </>
        )}
      {schoolDec.wentToChristmasParty && (
        <p>I decided to go to Mindera's Christmas party and I'm glad I went.</p>
      )}
      {schoolDec.wentToChristmasParty === false && (
        <p>I decided to stay home... I heard it was a great party.</p>
      )}

      {schoolDec.wentToChristmasParty !== undefined && !schoolDec.isFinished && (
        <NextButton
          action={() => {
            updateSkills(gameDetails.skillsLevel);
            increaseBalance(gameDetails.bankBalance + 300 * 3);
            setIsOpen(false);
            goToNext(gameDetails.timestamps);
          }}
        />
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    schoolDec: state.game.gameInfo.timestamps.schoolDec,
    skillsLevel: state.game.gameInfo.skillsLevel
  };
};

const mapDispatchToProps = dispatch => ({
  updateSchoolDec: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  setEsp: esp => dispatch(updateSpecializationAction(esp)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  setChristmasResponse: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolDec: {
          ...timestamps.schoolDec,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDecember);
