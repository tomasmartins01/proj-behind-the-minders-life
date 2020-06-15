import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction
} from "../../../redux/game/actions";
import { updateAgeAction } from "../../../redux/formInfo/actions";

import { NextButton } from "../../../components/game/GameButtons";

const FourthMinderaJune = ({
  formAge,
  gameDetails,
  minderaFourJun,
  updateBox,
  updateBalance,
  increaseAge,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOption = text => {
    updateBox({
      ...gameDetails.timestamps,
      minderaFourJun: {
        ...gameDetails.timestamps.minderaFourJun,
        surf: text
      }
    });
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 5}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I have been invited to go to the beach to surf with other Mindera{" "}
        employees.
      </p>
      {!minderaFourJun.surf && (
        <GameQuestion
          question="Will you go?"
          op1="Yes of course, it will be awesome"
          op2="NO NEVER IN MY LIFE"
          onClickOp1={() => setOption("surf some waves with my coworkers")}
          onClickOp2={() => setOption("stay home watching Netflix")}
        />
      )}

      {minderaFourJun.surf === "surf some waves with my coworkers" && (
        <p>I decided to have a lot of fun surfing the waves.</p>
      )}
      {minderaFourJun.surf === "stay home watching Netflix" && (
        <p>
          I decided to stay home watching some boring documentarys on Netflix{" "}
          while seeing instagram stories of my coworkers having a lot of fun.
        </p>
      )}

      {minderaFourJun.surf && !minderaFourJun.isFinished && (
        <NextButton
          action={() => {
            updateBalance(gameDetails.bankBalance + 600 * 3);
            increaseAge(formAge + 1);
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
    formAge: state.form.formDetails.age,
    gameDetails: state.game.gameInfo,
    minderaFourJun: state.game.gameInfo.timestamps.minderaFourJun
  };
};

const mapDispatchToProps = dispatch => ({
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  increaseAge: age => dispatch(updateAgeAction(age)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFourJun: {
          ...timestamps.minderaFourJun,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(FourthMinderaJune);
