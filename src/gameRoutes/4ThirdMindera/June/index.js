import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction
} from "../../../redux/game/actions";
import { updateAgeAction } from "../../../redux/formInfo/actions";

const ThirdMinderaJune = ({
  formAge, 
  gameDetails,
  minderaThreeJun,
  updateBankBalance,
  updateBox,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOptions = (place, money) => {
    updateBankBalance(gameDetails.bankBalance - money);
    updateBox({
      ...gameDetails.timestamps,
      minderaThreeJun: {
        ...gameDetails.timestamps.minderaThreeJun,
        vacationPlace: place,
        vacationMoney: money
      }
    });
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 4}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!minderaThreeJun.vacationPlace && !minderaThreeJun.vacationMoney && (
        <>
          <p>
            My well-deserved vacations are coming and I'm wondering where I{" "}
            would like to go.
          </p>

          <GameQuestion
            question="Where would you like to go?"
            op1="Bahamas"
            op2="Fiji"
            op3="Dubai"
            op4="Los Angeles"
            onClickOp1={() => setOptions("Bahamas", 10000)}
            onClickOp2={() => setOptions("Fiji", 8000)}
            onClickOp3={() => setOptions("Dubai", 4500)}
            onClickOp4={() => setOptions("Los Angeles", 5000)}
          />
        </>
      )}

      {minderaThreeJun.vacationPlace && minderaThreeJun.vacationMoney && (
        <>
          <p>
            I spent {minderaThreeJun.vacationMoney} euros to my reservation to{" "}
            {minderaThreeJun.vacationPlace}.
          </p>
          {!minderaThreeJun.isFinished && (
            <NextButton
              action={() => {
                updateBalance(gameDetails.bankBalance + 600 * 3);
                increaseAge(formAge + 1);
                setIsOpen(false);
                goToNext(gameDetails.timestamps);
              }}
            />
          )}
        </>
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    formAge: state.form.formDetails.age,
    gameDetails: state.game.gameInfo,
    minderaThreeJun: state.game.gameInfo.timestamps.minderaThreeJun
  };
};

const mapDispatchToProps = dispatch => ({
  increaseAge: age => dispatch(updateAgeAction(age)),
  updateBankBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaThreeJun: {
          ...timestamps.minderaThreeJun,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdMinderaJune);
