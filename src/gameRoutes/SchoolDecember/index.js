import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";

import {
  updateTimeBoxAction,
  updateEspecializationAction, updateBankBalanceAction
} from "../../redux/game/actions";

import QuizBackend from "./QuizBackend";
import QuizFrontend from "./QuizFrontend";
import QuizMobile from "./QuizMobile";

const SchoolDecember = ({
  gameDetails,
  timestamps,
  updateSchoolDec,
  setEsp,
  goToNext,
  increaseBalance
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const [especialization, setEspecialization] = useState("");

  const renderQuiz = especialization => {
    switch (especialization) {
      case "Backend":
        return (
          <QuizBackend
            changeEsp={() => {
              setEspecialization("");
              updateSchoolDec({
                ...timestamps,
                schoolDec: { ...timestamps.schoolDec, triedBackendQuiz: true }
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
                ...timestamps,
                schoolDec: { ...timestamps.schoolDec, triedFrontendQuiz: true }
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
                ...timestamps,
                schoolDec: { ...timestamps.schoolDec, triedMobileQuiz: true }
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
      <p>
        Congratulations! You concluded the first three months of Mindera School.
      </p>
      {!gameDetails.especialization && (
        <p>
          Now it´s time for you to choose what especialization path you will
          follow!
        </p>
      )}
      {gameDetails.especialization ? (
        <>
          <p>You decided to be a {gameDetails.especialization} developer.</p>
          {!timestamps.schoolDec.isFinished && <button
            onClick={() => {
              setIsOpen(false);
              goToNext(timestamps);
              increaseBalance(gameDetails.bankBalance + (600 * 3));
            }}
          >
            NEXT
          </button>}
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
          {timestamps.schoolDec.triedBackendQuiz &&
          timestamps.schoolDec.triedFrontendQuiz &&
          timestamps.schoolDec.triedMobileQuiz ? (
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
                disabled={timestamps.schoolDec.triedFrontendQuiz}
              >
                Frontend
              </button>
              <button
                onClick={() => setEspecialization("Backend")}
                disabled={timestamps.schoolDec.triedBackendQuiz}
              >
                Backend
              </button>
              <button
                onClick={() => setEspecialization("Mobile")}
                disabled={timestamps.schoolDec.triedMobileQuiz}
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
    timestamps: state.game.gameInfo.timestamps
  };
};

const mapDispatchToProps = dispatch => ({
  updateSchoolDec: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  setEsp: esp => dispatch(updateEspecializationAction(esp)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDecember);
