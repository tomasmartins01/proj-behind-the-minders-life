import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateHappinessAction,
  updateSkillsAction
} from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

const SecondMinderaDecember = ({
  gameDetails,
  minderaTwoDec,
  increaseBalance,
  updateSkills,
  updateHappiness,
  updateBox,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const tripDecision = value => {
    updateBox({
      ...gameDetails.timestamps,
      minderaTwoDec: {
        ...gameDetails.timestamps.minderaTwoDec,
        tripDecision: value
      }
    });
  };

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            htmlSkills: 100,
            cssSkills: 100,
            jsSkills: 100
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 100,
            sqlSkills: 100
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 100
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear + 2}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>Mindera decided to make a trip do the Alps!</p>
      {minderaTwoDec.tripDecision === undefined && (
        <GameQuestion
          question="Are you coming? (it will cost 1k)"
          op1="Yes"
          op2="No"
          onClickOp1={() => {
            updateHappiness(100);
            increaseBalance(gameDetails.bankBalance - 1000);
            tripDecision(true);
          }}
          onClickOp2={() => {
            updateHappiness(gameDetails.happiness - 30);
            tripDecision(false);
          }}
        />
      )}

      {minderaTwoDec.tripDecision && <p>I decided to go to the Alps.</p>}

      {minderaTwoDec.tripDecision === false && (
        <p>
          I decided to not go to the Alps with my team.
        </p>
      )}

      {minderaTwoDec.tripDecision !== undefined && !minderaTwoDec.isFinished && (
        <NextButton
          action={() => {
            setIsOpen(false);
            updateSkillsLevel(gameDetails.career);
            increaseBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaTwoDec: state.game.gameInfo.timestamps.minderaTwoDec
  };
};

const mapDispatchToProps = dispatch => ({
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  increaseBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaTwoDec: {
          ...timestamps.minderaTwoDec,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondMinderaDecember);
