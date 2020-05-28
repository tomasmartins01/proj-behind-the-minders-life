import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton } from "../../../components/game/GameButtons";

import {
  updateBankBalanceAction,
  updateTimeBoxAction,
  updateHappinessAction
} from "../../../redux/game/actions";

const SchoolMarch = ({
  gameDetails,
  schoolMar,
  decreaseBalance,
  choiceMade,
  updateHappiness,
  projectPicked,
  increaseBalance,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const decideProject = project => {
    projectPicked({
      ...gameDetails.timestamps,
      schoolMar: { ...schoolMar, projectPicked: project }
    });
  };

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 1}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        Some friends invited me to go on a trip to London for the weekend...
      </p>

      {schoolMar.choiceMade ? (
        <p>
          I decided to {schoolMar.choiceMade}. i think I should do it more
          often...
        </p>
      ) : (
        <GameQuestion
          question="Should I?"
          op1="Let's go!!! (this will cost you 600€)"
          op2="....I have to study."
          onClickOp1={() => {
            decreaseBalance(gameDetails.bankBalance - 600);
            choiceMade({
              ...gameDetails.timestamps,
              schoolMar: {
                ...schoolMar,
                choiceMade: "travel with friends"
              }
            });
          }}
          onClickOp2={() => {
            updateHappiness(gameDetails.happiness - 25);
            choiceMade({
              ...gameDetails.timestamps,
              schoolMar: { ...schoolMar, choiceMade: "study" }
            });
          }}
        />
      )}

      {schoolMar.choiceMade && !schoolMar.projectPicked && (
        <>
          {gameDetails.especialization === "Backend" && (
            <GameQuestion
              question="Now is time to choose a project..."
              op1="Build a bill splitter app"
              op2="Build a chess game app"
              op3="Build a music suggestion app"
              onClickOp1={() => decideProject("bill splitter")}
              onClickOp2={() => decideProject("chess game")}
              onClickOp3={() => decideProject("music suggestion")}
            />
          )}
          {gameDetails.especialization === "Frontend" && (
            <GameQuestion
              question="Now is time to choose a project..."
              op1="Build a movie search app"
              op2="Build a chat app"
              op3="Build a platform for bets with friends"
              onClickOp1={() => decideProject("movie search")}
              onClickOp2={() => decideProject("chat")}
              onClickOp3={() => decideProject("bets with friends")}
            />
          )}
          {gameDetails.especialization === "Mobile" && (
            <GameQuestion
              question="Now is time to choose a project..."
              op1="Build a restaurant reservation app"
              op2="Build a voice translation app"
              op3="Build a cooking recipes app"
              onClickOp1={() => decideProject("restaurant reservation")}
              onClickOp2={() => decideProject("voice translation")}
              onClickOp3={() => decideProject("cooking recipes")}
            />
          )}
        </>
      )}

      {schoolMar.projectPicked && (
        <p>I decided to build a {schoolMar.projectPicked} app. Nice!</p>
      )}

      {!schoolMar.isFinished && schoolMar.projectPicked && (
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
    schoolMar: state.game.gameInfo.timestamps.schoolMar
  };
};

const mapDispatchToProps = dispatch => ({
  decreaseBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
  choiceMade: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  projectPicked: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolMar: {
          ...timestamps.schoolMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolMarch);
