import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateSkillsAction,
  updateBankBalanceAction
} from "../../../redux/game/actions";
import { updateAgeAction } from "../../../redux/formInfo/actions";

const SecondMinderaJune = ({
  formAge,
  gameDetails,
  minderaTwoJun,
  increaseBalance,
  updateSkills,
  updateBox,
  increaseAge,
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

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            htmlSkills: 100,
            cssSkills: 100,
            jsSkills: 100
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 100,
            sqlSkills: 100
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 100
          }
        });
        break;
    }
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
            increaseAge(formAge + 1);
            updateSkillsLevel(gameDetails.career);
            increaseBalance(gameDetails.bankBalance + 600 * 3);
            goToNext(gameDetails.timestamps);
          }}
        />
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    formAge: state.form.formDetails.age,
    gameDetails: state.game.gameInfo,
    minderaTwoJun: state.game.gameInfo.timestamps.minderaTwoJun
  };
};

const mapDispatchToProps = dispatch => ({
  increaseAge: age => dispatch(updateAgeAction(age)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  increaseBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
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
