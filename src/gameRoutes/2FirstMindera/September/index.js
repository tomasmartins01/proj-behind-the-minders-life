import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton, EndButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateSkillsAction,
  updateCareerAction,
  updateBankBalanceAction,
  endGameAction
} from "../../../redux/game/actions";
import BackendInterview from "./BackendInterview";
import FrontendInterview from "./FrontendInterview";
import MobileInterview from "./MobileInterview";

const FirstMinderaSeptember = ({
  gameDetails,
  minderaOneSep,
  setOption,
  setMinderCareer,
  updateSkills,
  increaseBalance,
  goToNext,
  endGame
}) => {
  const [career, setCareer] = useState("");
  const [interview, setInterview] = useState(false);

  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const optionAfterSchool = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaOneSep: {
        ...gameDetails.timestamps.minderaOneSep,
        optionAfterSchool: op
      }
    });
  };

  const optionAfterInterview = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaOneSep: {
        ...gameDetails.timestamps.minderaOneSep,
        acceptedContract: op
      }
    });
  };

  const displayQuiz = career => {
    switch (career) {
      case "Backend":
        return <BackendInterview />;
      case "Frontend":
        return <FrontendInterview />;
      case "Mobile":
        return <MobileInterview />;
    }
  };

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 85,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            htmlSkills: 85,
            cssSkills: 85,
            jsSkills: 85
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 85,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 85,
            sqlSkills: 85
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 85,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 85
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear + 1}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!minderaOneSep.optionAfterSchool && (
        <GameQuestion
          question="Mindera School is over, what will you do now?"
          op1="Try to stay in Mindera by doing an interview"
          op2="Now it's time to go to University"
          op3="Go work abroad"
          onClickOp1={() => {
            optionAfterSchool("do an interview");
            setInterview(true);
          }}
          onClickOp2={() => optionAfterSchool("go to University")}
          onClickOp3={() => optionAfterSchool("go work abroad")}
        />
      )}

      {minderaOneSep.optionAfterSchool && (
        <p>I decided to {minderaOneSep.optionAfterSchool}.</p>
      )}

      {minderaOneSep.optionAfterSchool &&
        minderaOneSep.optionAfterSchool !== "do an interview" && (
          <EndButton
            action={() => {
              goToNext(gameDetails.timestamps);
              endGame();
            }}
          />
        )}

      {minderaOneSep.optionAfterSchool === "do an interview" &&
        minderaOneSep.passedTheInterview === undefined && (
          <>
            {career ? (
              displayQuiz(career)
            ) : (
              <GameQuestion
                question="What career do you want to proceed?"
                op1="Backend Developer"
                op2="Frontend Developer"
                op3="Mobile Developer"
                onClickOp1={() => setCareer("Backend")}
                onClickOp2={() => setCareer("Frontend")}
                onClickOp3={() => setCareer("Mobile")}
              />
            )}
          </>
        )}

      {minderaOneSep.passedTheInterview === false && (
        <>
          <p>I failed the interview.</p>
          <EndButton
            action={() => {
              goToNext(gameDetails.timestamps);
              endGame();
            }}
          />
        </>
      )}

      {minderaOneSep.passedTheInterview && (
        <>
          <p>
            I passed the interview and Mindera offered me a contract as a{" "}
            {career} Developer.
          </p>
          {minderaOneSep.acceptedContract === undefined && (
            <GameQuestion
              question="Should I accept?"
              op1="Yes!"
              op2="Actually... I changed my mind"
              onClickOp1={() => {
                optionAfterInterview(true);
                setMinderCareer(career);
              }}
              onClickOp2={() => optionAfterInterview(false)}
            />
          )}

          {minderaOneSep.acceptedContract && (
            <>
              <p>I am now a {gameDetails.career} Developer.</p>
              {!minderaOneSep.isFinished && (
                <NextButton
                  action={() => {
                    updateSkillsLevel(gameDetails.career);
                    increaseBalance(gameDetails.bankBalance + 600 * 3);
                    setIsOpen(false);
                    goToNext(gameDetails.timestamps);
                  }}
                />
              )}
            </>
          )}

          {minderaOneSep.acceptedContract === false && (
            <>
              <p>I changed my mind about working at Mindera.</p>
              <EndButton
                action={() => {
                  goToNext(gameDetails.timestamps);
                  endGame();
                }}
              />
            </>
          )}
        </>
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    minderaOneSep: state.game.gameInfo.timestamps.minderaOneSep
  };
};

const mapDispatchToProps = dispatch => ({
  setOption: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  setMinderCareer: career => dispatch(updateCareerAction(career)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaOneSep: {
          ...timestamps.minderaOneSep,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstMinderaSeptember);
