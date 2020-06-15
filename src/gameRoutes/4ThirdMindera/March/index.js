import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateBankBalanceAction
} from "../../../redux/game/actions";

const ThirdMinderaMarch = ({
  gameDetails,
  updateBankBalance,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 4}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I received superpositive feedback from the clients and the whole team{" "}
        received a bonus.
      </p>
      <NextButton
        action={() => {
          updateBankBalance(gameDetails.bankBalance + 600 * 3 + 200);
          setIsOpen(false);
          goToNext(gameDetails.timestamps);
        }}
      />
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo
  };
};

const mapDispatchToProps = dispatch => ({
  updateBankBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaThreeMar: {
          ...timestamps.minderaThreeMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdMinderaMarch);
