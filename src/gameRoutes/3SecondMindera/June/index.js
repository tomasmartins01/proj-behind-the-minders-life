import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import { updateTimeBoxAction } from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

const SecondMinderaJune = ({
  gameDetails,
  minderaTwoJun,
  updateBox,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const wentToLanParty = () => {
    updateBox({
      ...gameDetails.timestamps,
      minderaTwoJun: {
        ...gameDetails.timestamps.minderaTwoJun,
        wentToLanParty: true
      }
    });
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 3}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        The Frontend developers want to go for a picnic in the Parque da Cidade{" "}
        while the Backend developers want to have a LAN Party.
      </p>
      {!minderaTwoJun.wentToLanParty && (
        <GameQuestion
          question="Which one will you choose?"
          op1="LAN PARTY LIKE A BOSS"
          op2="Go to the Lan party"
          op3="Join my bros in Lan"
          op4="Lan party"
          onClickOp1={() => wentToLanParty()}
          onClickOp2={() => wentToLanParty()}
          onClickOp3={() => wentToLanParty()}
          onClickOp4={() => wentToLanParty()}
        />
      )}

      {minderaTwoJun.wentToLanParty && (
        <p>I went to Backend developers' LAN Party.</p>
      )}

      {minderaTwoJun.wentToLanParty && !minderaTwoJun.isFinished && (
        <NextButton
          action={() => {
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
    minderaTwoJun: state.game.gameInfo.timestamps.minderaTwoJun
  };
};

const mapDispatchToProps = dispatch => ({
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaTwoJun: {
          ...timestamps.minderaTwoJun,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondMinderaJune);
