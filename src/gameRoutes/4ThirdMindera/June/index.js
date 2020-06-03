import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import { updateTimeBoxAction } from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

const ThirdMinderaJune = ({ gameDetails, minderaThreeJun, goToNext }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 4}`}
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
    minderaThreeJun: state.game.gameInfo.timestamps.minderaThreeJun
  };
};

const mapDispatchToProps = dispatch => ({
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
