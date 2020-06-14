import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateHappinessAction,
  updateSkillsAction
} from "../../../redux/game/actions";

import mindersList from "../../../helpers/mindersList";

const SecondMinderaSeptember = ({
  gameDetails,
  minderaTwoSep,
  birthday,
  updateBalance,
  updateHappiness,
  updateSkills,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const mindersName = mindersList.map(minder => minder.name);

  const [minderSelected, setMinderSelected] = useState(
    mindersName[(Math.random() * mindersName.length).toFixed()]
  );

  const birthdayText = text => {
    birthday({
      ...gameDetails.timestamps,
      minderaTwoSep: {
        ...gameDetails.timestamps.minderaTwoSep,
        birthdayAction: text
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
      hashtag={`#september${gameDetails.startingYear + 2}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I have been invited to {minderSelected}'s birthday party at Pérola
        Negra.
      </p>
      {!minderaTwoSep.birthdayAction ? (
        <GameQuestion
          question="What will you do there?"
          op1="Only talk with people you know"
          op2="Ask someone for free drink coupons"
          op3="Pay a round of beer for everyone at the bar"
          op4="Leave earlier"
          onClickOp1={() => birthdayText("only talk with people you know")}
          onClickOp2={() => birthdayText("ask someone for free drink coupons")}
          onClickOp3={() => {
            birthdayText("pay a round of beer for everyone at the bar");
            updateBalance(gameDetails.bankBalance - 200);
            updateHappiness(100);
          }}
          onClickOp4={() => {
            birthdayText("leave earlier");
            updateHappiness(gameDetails.happiness - 20);
          }}
        />
      ) : (
        <p>I decided to {minderaTwoSep.birthdayAction}.</p>
      )}

      {minderaTwoSep.birthdayAction && !minderaTwoSep.isFinished && (
        <NextButton
          action={() => {
            setIsOpen(false);
            updateSkillsLevel(gameDetails.career);
            updateBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaTwoSep: state.game.gameInfo.timestamps.minderaTwoSep
  };
};

const mapDispatchToProps = dispatch => ({
  birthday: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaTwoSep: {
          ...timestamps.minderaTwoSep,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondMinderaSeptember);
