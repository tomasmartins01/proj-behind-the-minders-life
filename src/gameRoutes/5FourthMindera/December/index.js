import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateHappinessAction,
  updateSkillsAction
} from "../../../redux/game/actions";

const FourthMinderaDecember = ({
  gameDetails,
  minderaFourDec,
  updateBox,
  updateHappiness,
  updateSkills,
  updateBalance,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOption = text => {
    updateBox({
      ...gameDetails.timestamps,
      minderaFourDec: {
        ...gameDetails.timestamps.minderaFourDec,
        doneWorkshop: text
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
            angularSkills: 65,
            vueSkills: 65
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            cplusplusSkills: 65,
            golangSkills: 65,
            phpSkills: 65,
            pythonSkills: 65,
            rubySkills: 65
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            dartSkills: 65,
            flutterSkills: 65,
            swiftSkills: 65,
            reactNativeSkills: 65
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear + 4}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>They asked me to do a mindfullness workshop.</p>
      {minderaFourDec.doneWorkshop === undefined && (
        <GameQuestion
          question="Will you accept it?"
          op1="Yes, it will be fun!"
          op2="No, I'm busy"
          onClickOp1={() => {
            setOption(true);
            updateBalance(gameDetails.bankBalance - 1000);
            updateHappiness(gameDetails.happiness - 30);
          }}
          onClickOp2={() => {
            setOption(false);
            updateHappiness(gameDetails.happiness - 10);
          }}
        />
      )}

      {minderaFourDec.doneWorkshop !== undefined && (
        <>
          {minderaFourDec.doneWorkshop ? (
            <p>
              During the workshop, everyone fell asleep and a thief stole some{" "}
              computers from Mindera. All the employees had to work longer hours
              to pay for the computers.
            </p>
          ) : (
            <p>I said I was busy and I couldn't do the workshop.</p>
          )}
        </>
      )}

      {minderaFourDec.doneWorkshop !== undefined && !minderaFourDec.isFinished && (
        <NextButton
          action={() => {
            updateBalance(gameDetails.bankBalance + 600 * 3);
            updateSkillsLevel(gameDetails.career);
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
    minderaFourDec: state.game.gameInfo.timestamps.minderaFourDec
  };
};

const mapDispatchToProps = dispatch => ({
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFourDec: {
          ...timestamps.minderaFourDec,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FourthMinderaDecember);
