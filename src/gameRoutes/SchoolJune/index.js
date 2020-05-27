import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";

const SchoolJune = ({ gameDetails }) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 1}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>a</p>
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    timestamps: state.game.gameInfo.timestamps
  };
};

export default connect(mapStateToProps)(SchoolJune);
