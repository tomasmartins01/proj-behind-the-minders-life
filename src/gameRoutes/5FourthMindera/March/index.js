import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateHappinessAction
} from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

const FourthMinderaMarch = ({
  gameDetails,
  minderaFourMar,
  updateHappiness,
  updateBalance,
  updateBox,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOption = text => {
    updateBox({
      ...gameDetails.timestamps,
      minderaFourMar: {
        ...gameDetails.timestamps.minderaFourMar,
        minderaTechDay: text
      }
    });
  };

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 5}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>I was asked to give a presentation on Mindera Tech Day!</p>
      {minderaFourMar.minderaTechDay === undefined && (
        <GameQuestion
          question="Will you accept?"
          op1="Yes"
          op2="No"
          onClickOp1={() => setOption(true)}
          onClickOp2={() => setOption(false)}
        />
      )}

      {minderaFourMar.minderaTechDay !== undefined && (
        <>
          {minderaFourMar.minderaTechDay ? (
            <p>I think the presentation could be good for me!</p>
          ) : (
            <p>I don't know... I'm really shy</p>
          )}
        </>
      )}

      {minderaFourMar.minderaTechDay !== undefined &&
        !minderaFourMar.isFinished && (
          <NextButton
            action={() => {
              updateBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaFourMar: state.game.gameInfo.timestamps.minderaFourMar
  };
};

const mapDispatchToProps = dispatch => ({
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFourMar: {
          ...timestamps.minderaFourMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(FourthMinderaMarch);
