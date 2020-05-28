import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton, EndButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateEspecializationAction,
  updateBankBalanceAction,
  updateSkillsAction
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
  updateSkills,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const [especialization, setEspecialization] = useState("");

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...skillsLevel,
          socialSkills: 85,
          programmingSkills: 72.5,
          backend: {
            ...skillsLevel.backend,
            javaSkills: 65,
            sqlSkills: 65
          },
          frontend: {
            ...skillsLevel.frontend,
            htmlSkills: 80,
            cssSkills: 80,
            jsSkills: 80
          },
          mobile: {
            ...skillsLevel.mobile,
            kotlinSkills: 65
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...skillsLevel,
          socialSkills: 80,
          programmingSkills: 70,
          backend: {
            ...skillsLevel.backend,
            javaSkills: 80,
            sqlSkills: 80
          },
          frontend: {
            ...skillsLevel.frontend,
            htmlSkills: 65,
            cssSkills: 65,
            jsSkills: 65
          },
          mobile: {
            ...skillsLevel.mobile,
            kotlinSkills: 65
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...skillsLevel,
          socialSkills: 80,
          programmingSkills: 67.5,
          backend: {
            ...skillsLevel.backend,
            javaSkills: 65,
            sqlSkills: 65
          },
          frontend: {
            ...skillsLevel.frontend,
            htmlSkills: 65,
            cssSkills: 65,
            jsSkills: 65
          },
          mobile: {
            ...skillsLevel.mobile,
            kotlinSkills: 80
          }
        });
        break;
    }
  };

  const renderQuiz = especialization => {
    switch (especialization) {
      case "Backend":
        return (
          <QuizBackend
            changeEsp={() => {
              setEspecialization("");
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
              setEspecialization("");
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
              setEspecialization("");
              updateSchoolDec({
                ...gameDetails.timestamps,
                schoolDec: { ...schoolDec, triedMobileQuiz: true }
              });
            }}
          />
        );
    }
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>I concluded the first three months of Mindera School.</p>
      {!gameDetails.especialization && (
        <p>Now it´s time to choose what especialization path I will follow!</p>
      )}
      {gameDetails.especialization ? (
        <>
          <p>I decided to be a {gameDetails.especialization} developer.</p>
          {!schoolDec.isFinished && (
            <NextButton
              action={() => {
                increaseBalance(gameDetails.bankBalance + 600 * 3);
                updateSkillsLevel(gameDetails.especialization);
                setIsOpen(false);
                goToNext(gameDetails.timestamps);
              }}
            />
          )}
        </>
      ) : especialization ? (
        renderQuiz(especialization)
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
              <button onClick={() => setEsp("Frontend")}>
                I choose Frontend
              </button>
              <button onClick={() => setEsp("Backend")}>
                I choose Backend
              </button>
              <button onClick={() => setEsp("Mobile")}>I choose Mobile</button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEspecialization("Frontend")}
                disabled={schoolDec.triedFrontendQuiz}
              >
                Frontend
              </button>
              <button
                onClick={() => setEspecialization("Backend")}
                disabled={schoolDec.triedBackendQuiz}
              >
                Backend
              </button>
              <button
                onClick={() => setEspecialization("Mobile")}
                disabled={schoolDec.triedMobileQuiz}
              >
                Mobile
              </button>
            </>
          )}
        </div>
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
  setEsp: esp => dispatch(updateEspecializationAction(esp)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
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
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDecember);
