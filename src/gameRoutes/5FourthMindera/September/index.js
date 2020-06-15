import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "./../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction
} from "../../../redux/game/actions";

const FourthMinderaSeptember = ({
  gameDetails,
  minderaFourSep,
  updateBox,
  updateBalance,
  updateSkills,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOption = text => {
    updateBox({
      ...gameDetails.timestamps,
      minderaFourSep: {
        ...gameDetails.timestamps.minderaFourSep,
        newLanguageProject: text
      }
    });
    if (!text) {
      updateSkills({ ...gameDetails.skillsLevel, socialSkills: 80 });
    }
  };

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear + 4}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I was invited to work on a project developed in a language I'm not{" "}
        familiarized with.
      </p>
      {minderaFourSep.newLanguageProject === undefined && (
        <GameQuestion
          question="Will you accept?"
          op1="Yes"
          op2="No"
          onClickOp1={() => setOption(true)}
          onClickOp2={() => setOption(false)}
        />
      )}

      {minderaFourSep.newLanguageProject !== undefined && (
        <>
          {minderaFourSep.newLanguageProject ? (
            <p>I chose to be a part of a new project.</p>
          ) : (
            <p>
              I chose to play it safe and not take time to learn a new{" "}
              language.
            </p>
          )}
        </>
      )}
      {minderaFourSep.newLanguageProject !== undefined && !minderaFourSep.isFinished && (
        <NextButton
          action={() => {
            updateBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaFourSep: state.game.gameInfo.timestamps.minderaFourSep,
    skillsLevel: state.game.gameInfo.skillsLevel
  };
};

const mapDispatchToProps = dispatch => ({
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFourSep: {
          ...timestamps.minderaFourSep,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourthMinderaSeptember);
