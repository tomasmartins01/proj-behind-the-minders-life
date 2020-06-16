import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateHappinessAction
} from "../../../redux/game/actions";

const FourthMinderaDecember = ({
  gameDetails,
  minderaFourDec,
  updateBox,
  updateHappiness,
  updateBalance,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOption = text => {
    updateBox({
      ...gameDetails.timestamps,
      minderaFourDec: {
        ...gameDetails.timestamps.minderaFourDec,
        doneWorkshop: text
      }
    });
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear + 4}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>They asked me to do a mindfullness workshop.</p>
      {minderaFourDec.doneWorkshop === undefined && (
        <GameQuestion
          question="Will you accept it?"
          op1="Yes, it will be fun!"
          op2="No, I'm busy"
          onClickOp1={() => {
            setOption(true);
            updateBalance(gameDetails.bankBalance - 1000);
            updateHappiness(gameDetails.happiness - 30);
          }}
          onClickOp2={() => {
            setOption(false);
            updateHappiness(gameDetails.happiness - 10);
          }}
        />
      )}

      {minderaFourDec.doneWorkshop !== undefined && (
        <>
          {minderaFourDec.doneWorkshop ? (
            <p>
              During the workshop, everyone fell asleep and a thief stole some{" "}
              computers from Mindera. All the employees had to work longer hours
              to pay for the computers.
            </p>
          ) : (
            <p>I said I was busy and I couldn't do the workshop.</p>
          )}
        </>
      )}

      {minderaFourDec.doneWorkshop !== undefined && !minderaFourDec.isFinished && (
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
    minderaFourDec: state.game.gameInfo.timestamps.minderaFourDec
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
        minderaFourDec: {
          ...timestamps.minderaFourDec,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourthMinderaDecember);
