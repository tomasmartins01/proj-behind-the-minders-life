import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateHappinessAction
} from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

const SecondMinderaDecember = ({
  gameDetails,
  minderaTwoDec,
  updateBalance,
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

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear + 2}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {minderaTwoDec.tripDecision === undefined && (
        <GameQuestion
          question="Mindera decided to make a trip do the Alps! Are you coming?"
          op1="Yes"
          op2="No"
          onClickOp1={() => {
            updateHappiness(100);
            updateBalance(gameDetails.bankBalance - 500);
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
        <p>I decided to not go to the Alps.</p>
      )}

      {minderaTwoDec.tripDecision !== undefined && !minderaTwoDec.isFinished && (
        <NextButton
          action={() => {
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
    minderaTwoDec: state.game.gameInfo.timestamps.minderaTwoDec
  };
};

const mapDispatchToProps = dispatch => ({
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
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
