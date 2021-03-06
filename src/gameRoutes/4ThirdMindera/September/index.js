import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton, EndButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  endGameAction,
  updateSkillsAction,
  updateHappinessAction
} from "../../../redux/game/actions";

const ThirdMinderaSeptember = ({
  gameDetails,
  minderaThreeSep,
  updateBox,
  updateBalance,
  updateHappiness,
  updateSkills,
  endGame,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const robberyText = text => {
    updateBox({
      ...gameDetails.timestamps,
      minderaThreeSep: {
        ...gameDetails.timestamps.minderaThreeSep,
        robberyAction: text
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
            jsSkills: 95,
            reactjsSkills: 92
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 95,
            sqlSkills: 95
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 95
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear + 3}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        You are on your way to Mindera when suddenly a strange individual{" "}
        aproaches you asking for money... Oh no! He has a knife!!!
      </p>
      {!minderaThreeSep.robberyAction && (
        <GameQuestion
          question="What are you going to do?"
          op1="Give him all your money!"
          op2="Start running!"
          op3="Cry and try to call your mom."
          op4="FIGHT LIKE A BOSS"
          onClickOp1={() => {
            robberyText("give the thief all your money");
            updateBalance(0);
          }}
          onClickOp2={() => robberyText("start running from the thief")}
          onClickOp3={() => {
            robberyText("cry and call your mom. The thief stole your phone");
            updateBalance(gameDetails.bankBalance - 500);
            updateHappiness(70);
          }}
          onClickOp4={() => {
            robberyText("you fought like a boss");
          }}
        />
      )}

      {minderaThreeSep.robberyAction && (
        <p>
          After the thief approached you, {minderaThreeSep.robberyAction}.
          {minderaThreeSep.robberyAction === "you fought like a boss" && (
            <span>You died.</span>
          )}
        </p>
      )}

      {minderaThreeSep.robberyAction &&
        (minderaThreeSep.robberyAction === "you fought like a boss" ||
          minderaThreeSep.robberyAction === "give the thief all your money") && (
          <EndButton
            action={() => {
              goToNext(gameDetails.timestamps);
              endGame();
            }}
          />
        )}

      {!minderaThreeSep.isFinished &&
        minderaThreeSep.robberyAction &&
        (minderaThreeSep.robberyAction === "start running from the thief" ||
          minderaThreeSep.robberyAction ===
            "cry and call your mom. The thief stole your phone") && (
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
    minderaThreeSep: state.game.gameInfo.timestamps.minderaThreeSep
  };
};

const mapDispatchToProps = dispatch => ({
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  endGame: () => dispatch(endGameAction()),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaThreeSep: {
          ...timestamps.minderaThreeSep,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdMinderaSeptember);
