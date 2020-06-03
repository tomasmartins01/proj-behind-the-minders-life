import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import { updateTimeBoxAction } from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

const FifthMinderaSeptember = ({ gameDetails, minderaFiveSep, goToNext }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear + 5}`}
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
    minderaFiveSep: state.game.gameInfo.timestamps.minderaFiveSep
  };
};

const mapDispatchToProps = dispatch => ({
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFiveSep: {
          ...timestamps.minderaFiveSep,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FifthMinderaSeptember);
