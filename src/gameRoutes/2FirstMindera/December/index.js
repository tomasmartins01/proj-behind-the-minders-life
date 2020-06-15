import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction
} from "../../../redux/game/actions";

import { NextButton } from "../../../components/game/GameButtons";

import mindersList from "../../../helpers/mindersList";

const FirstMinderaDecember = ({
  gameDetails,
  minderaOneDec,
  setOption,
  updateSkills,
  increaseBalance,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const optionPartyStudy = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaOneDec: {
        ...gameDetails.timestamps.minderaOneDec,
        partyOrProject: op
      }
    });
  };

  const optionPresent = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaOneDec: {
        ...gameDetails.timestamps.minderaOneDec,
        christmasPresent: op
      }
    });
  };

  const mindersName = mindersList.map(minder => minder.name);

  const [minderSelected, setMinderSelected] = useState(
    mindersName[(Math.random() * (mindersName.length -1)).toFixed()]
  );

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 90,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            htmlSkills: 90,
            cssSkills: 90,
            jsSkills: 90
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 90,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 90,
            sqlSkills: 90
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 90,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 90
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear + 1}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!minderaOneDec.partyOrProject && (
        <>
          <p>
            I am having difficulties with your project, but your best friend is{" "}
            celebrating his birthday and is going to throw a big party.
          </p>
          <GameQuestion
            question="Are you going to party or decide to stay home and finish the project?"
            op1="Stay Home and finish the project"
            op2="Party all night with my best friend"
            onClickOp1={() => optionPartyStudy("finish the project")}
            onClickOp2={() =>
              optionPartyStudy("party all night with my best friend")
            }
          />
        </>
      )}
      {minderaOneDec.partyOrProject && (
        <p>I decided to {minderaOneDec.partyOrProject}.</p>
      )}
      {minderaOneDec.partyOrProject && !minderaOneDec.christmasPresent && (
        <GameQuestion
          question={`It's secret santa party, you have to give a gift to ${minderSelected} what will you give?`}
          op1="a book"
          op2="a gaming keyboard"
          op3="a soap"
          op4="the new edition of fifa"
          onClickOp1={() => optionPresent("a book")}
          onClickOp2={() => optionPresent("a gaming keyboard")}
          onClickOp3={() => optionPresent("a soap")}
          onClickOp4={() => optionPresent("the new edition of fifa")}
        />
      )}
      {minderaOneDec.partyOrProject && minderaOneDec.christmasPresent && (
        <p>
          I gave {minderSelected} {minderaOneDec.christmasPresent}.
        </p>
      )}
      {minderaOneDec.christmasPresent && !minderaOneDec.isFinished && (
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
    minderaOneDec: state.game.gameInfo.timestamps.minderaOneDec
  };
};

const mapDispatchToProps = dispatch => ({
  setOption: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  increaseBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaOneDec: {
          ...timestamps.minderaOneDec,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstMinderaDecember);
