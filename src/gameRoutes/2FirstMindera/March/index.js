import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction,
  endGameAction
} from "../../../redux/game/actions";

import { NextButton, EndButton } from "../../../components/game/GameButtons";

const FirstMinderaMarch = ({
  gameDetails,
  minderaOneMar,
  setOption,
  increaseBalance,
  updateSkills,
  endGame,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const dinner = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaOneMar: {
        ...gameDetails.timestamps.minderaOneMar,
        dinnerFood: op
      }
    });
  };

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 95,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            htmlSkills: 95,
            cssSkills: 85,
            jsSkills: 73,
            reactjsSkills: 70
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 95,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 73,
            sqlSkills: 73
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 95,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 73
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 2}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!minderaOneMar.dinnerFood && (
        <GameQuestion
          question="Your colleagues invitied you for dinner, what will you eat?"
          op1="Bifanas"
          op2="Bacalhau"
          op3="Francesinha"
          op4="Polvo à Lagareiro"
          onClickOp1={() => dinner("eat bifanas")}
          onClickOp2={() => dinner("eat bacalhau")}
          onClickOp3={() => dinner("eat francesinha")}
          onClickOp4={() => dinner("eat polvo à lagareiro")}
        />
      )}

      {minderaOneMar.dinnerFood === "eat bifanas" && (
        <p>
          I don't feel so good... Those bifanas are going to make me throw up.
        </p>
      )}

      {minderaOneMar.dinnerFood === "eat bacalhau" && (
        <p>Wow that bacalhau was so nice!</p>
      )}

      {minderaOneMar.dinnerFood === "eat francesinha" && (
        <p>I think I got food poisoning because I ate a francesinha.</p>
      )}

      {minderaOneMar.dinnerFood === "eat polvo à lagareiro" && (
        <>
          <p>I think that thing I ate was alive...</p>
          <p>
            I unfortunately died due to eating a live animal from polvo à
            lagareiro.
          </p>
        </>
      )}

      {minderaOneMar.dinnerFood &&
        minderaOneMar.dinnerFood === "eat polvo à lagareiro" && (
          <EndButton
            action={() => {
              goToNext(gameDetails.timestamps);
              endGame();
            }}
          />
        )}

      {minderaOneMar.dinnerFood &&
        minderaOneMar.dinnerFood !== "eat polvo à lagareiro" &&
        !minderaOneMar.isFinished && (
          <NextButton
            action={() => {
              updateSkillsLevel(gameDetails.career);
              increaseBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaOneMar: state.game.gameInfo.timestamps.minderaOneMar
  };
};

const mapDispatchToProps = dispatch => ({
  setOption: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  increaseBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
  endGame: () => dispatch(endGameAction()),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaOneMar: {
          ...timestamps.minderaOneMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstMinderaMarch);
