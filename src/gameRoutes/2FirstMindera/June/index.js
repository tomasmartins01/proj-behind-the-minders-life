import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import { updateTimeBoxAction } from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

const FirstMinderaJune = ({
  gameDetails,
  minderaOneJun,
  setOption,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const chooseProject = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaOneJun: { ...gameDetails.timestamps.minderaOneJun, newProject: op }
    });
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 2}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!minderaOneJun.newProject && (
        <>
          <p>
            I finished my current project and now it's time to decide in which{" "}
            project I will be in.
          </p>
          {gameDetails.carrer !== "Mobile" && (
            <GameQuestion
              question="What project will you choose?"
              op1="betting website"
              op2="online store"
              op3="weather website"
              op4="crypto currency"
              onClickOp1={() => chooseProject("a betting app")}
              onClickOp2={() => chooseProject("an online store")}
              onClickOp3={() => chooseProject("a weather app")}
              onClickOp4={() => chooseProject("a crypto currency app")}
            />
          )}

          {gameDetails.carrer === "Mobile" && (
            <GameQuestion
              question="What project will you choose?"
              op1="game"
              op2="food donation system"
              op3="weather app"
              op4="transport alert app"
              onClickOp1={() => chooseProject("a game app")}
              onClickOp2={() => chooseProject("an food donation system")}
              onClickOp3={() => chooseProject("a weather app")}
              onClickOp4={() => chooseProject("a transport alert app")}
            />
          )}
        </>
      )}

      {minderaOneJun.newProject && (
        <p>
          After finishing my last project, I chose my next project:{" "}
          {minderaOneJun.newProject}.
        </p>
      )}

      {minderaOneJun.newProject && !minderaOneJun.isFinished && (
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
    minderaOneJun: state.game.gameInfo.timestamps.minderaOneJun
  };
};

const mapDispatchToProps = dispatch => ({
  setOption: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaOneJun: {
          ...timestamps.minderaOneJun,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstMinderaJune);
