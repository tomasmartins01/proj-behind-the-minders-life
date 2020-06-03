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

import {
  BackendProject,
  BackendLanguage,
  FrontendProject,
  MobileProject,
  FrontendLanguage,
  MobileLanguage
} from "./VocationParts";

const SchoolMarch = ({
  gameDetails,
  schoolMar,
  decreaseBalance,
  choiceMade,
  updateHappiness,
  projectChoices,
  increaseBalance,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const decideProject = project => {
    projectChoices({
      ...gameDetails.timestamps,
      schoolMar: { ...schoolMar, projectPicked: project }
    });
  };

  const decideLanguage = language => {
    projectChoices({
      ...gameDetails.timestamps,
      schoolMar: { ...schoolMar, languagePicked: language }
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
          {gameDetails.specialization === "Backend" && (
            <>
              <BackendProject
                op1Click={() => decideProject("bill splitter")}
                op2Click={() => decideProject("chess game")}
                op3Click={() => decideProject("music suggestion")}
              />
            </>
          )}
          {gameDetails.specialization === "Frontend" && (
            <FrontendProject
              op1Click={() => decideProject("movie search")}
              op2Click={() => decideProject("chat")}
              op3Click={() => decideProject("bets with friends")}
            />
          )}
          {gameDetails.specialization === "Mobile" && (
            <MobileProject
              op1Click={() => decideProject("restaurant reservation")}
              op2Click={() => decideProject("voice translation")}
              op3Click={() => decideProject("cooking recipes")}
            />
          )}
        </>
      )}

      {schoolMar.projectPicked && !schoolMar.languagePicked && (
        <>
          {gameDetails.specialization === "Backend" && (
            <BackendLanguage
              op1Click={() => decideLanguage("Java")}
              op2Click={() => decideLanguage("Golang")}
              op3Click={() => decideLanguage("Python")}
            />
          )}
          {gameDetails.specialization === "Frontend" && (
            <FrontendLanguage
              op1Click={() => decideLanguage("Javascript")}
              op2Click={() => decideLanguage("React")}
              op3Click={() => decideLanguage("Angular")}
            />
          )}
          {gameDetails.specialization === "Mobile" && (
            <MobileLanguage
              op1Click={() => decideLanguage("Kotlin")}
              op2Click={() => decideLanguage("Swift")}
              op3Click={() => decideLanguage("React Native")}
            />
          )}
        </>
      )}

      {schoolMar.projectPicked && schoolMar.languagePicked && (
        <p>
          I decided to build a {schoolMar.projectPicked} app with{" "}
          {schoolMar.languagePicked}.
        </p>
      )}

      {!schoolMar.isFinished && schoolMar.projectPicked && (
        <NextButton
          action={() => {
            setIsOpen(false);
            goToNext(gameDetails.timestamps);
            increaseBalance(gameDetails.bankBalance + 300 * 3);
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
  projectChoices: timestamps => dispatch(updateTimeBoxAction(timestamps)),
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
