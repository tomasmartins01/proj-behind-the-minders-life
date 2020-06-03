import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import { updateTimeBoxAction } from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

const FifthMinderaMarch = ({ gameDetails, minderaFiveMar, goToNext }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 6}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <NextButton
        action={() => {
          setIsOpen(false);
          goToNext(gameDetails.timestamps);
        }}
      />
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    minderaFiveMar: state.game.gameInfo.timestamps.minderaFiveMar
  };
};

const mapDispatchToProps = dispatch => ({
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFiveMar: {
          ...timestamps.minderaFiveMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(FifthMinderaMarch);
