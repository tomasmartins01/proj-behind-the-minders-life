import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton, EndButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  endGameAction
} from "../../../redux/game/actions";

const SchoolJune = ({
  gameDetails,
  schoolMar,
  schoolJun,
  presentationFeeling,
  increaseBalance,
  endGame,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const setPresentationFeeling = feeling => {
    presentationFeeling({
      ...gameDetails.timestamps,
      schoolJun: { ...schoolJun, presentationFeeling: feeling }
    });
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 1}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!schoolJun.presentationFeeling && (
        <GameQuestion
          question="Today is the project presentation day, I'm feeling.."
          op1="Nervous"
          op2="Confident"
          op3="Insecure"
          onClickOp1={() => setPresentationFeeling("nervous")}
          onClickOp2={() => setPresentationFeeling("confident")}
          onClickOp3={() => setPresentationFeeling("insecure")}
        />
      )}
      {schoolJun.presentationFeeling === "nervous" && (
        <>
          <p>
            The teachers didnt like my presentation about a{" "}
            {schoolMar.projectPicked} app. I think I will no longer be part of
            the Mindera {gameDetails.startingYear} class.
            <EndButton
              action={() => {
                goToNext(gameDetails.timestamps);
                endGame();
              }}
            />
          </p>
        </>
      )}
      {schoolJun.presentationFeeling === "confident" && (
        <>
          <p>
            I think my presentation about a {schoolMar.projectPicked} app went
            really great, all the teachers seemed to like the project!.
          </p>
        </>
      )}
      {schoolJun.presentationFeeling === "insecure" && (
        <>
          <p>
            The teachers loved my project ideia of a {schoolMar.projectPicked}{" "}
            app but I should have practiced more..
          </p>
        </>
      )}
      {schoolJun.presentationFeeling &&
        schoolJun.presentationFeeling !== "nervous" && (
          <NextButton
            action={() => {
              setIsOpen(false);
              goToNext(gameDetails.timestamps);
              increaseBalance(gameDetails.bankBalance + 600 * 3);
            }}
          />
        )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    schoolMar: state.game.gameInfo.timestamps.schoolMar,
    schoolJun: state.game.gameInfo.timestamps.schoolJun
  };
};

const mapDispatchToProps = dispatch => ({
  presentationFeeling: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolJun: {
          ...timestamps.schoolJun,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolJune);
