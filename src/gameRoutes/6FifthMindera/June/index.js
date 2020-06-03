import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import { updateTimeBoxAction, endGameAction } from "../../../redux/game/actions";

import { EndButton } from "../../../components/game/GameButtons";

const FifthMinderaJune = ({ gameDetails, minderaFiveJun, goToNext, endGame }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 6}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <EndButton
        action={() => {
          goToNext(gameDetails.timestamps);
          endGame();
        }}
      />
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    minderaFiveJun: state.game.gameInfo.timestamps.minderaFiveJun
  };
};

const mapDispatchToProps = dispatch => ({
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFiveJun: {
          ...timestamps.minderaFiveJun,
          isFinished: true
        }
      })
    ),
    endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(FifthMinderaJune);
