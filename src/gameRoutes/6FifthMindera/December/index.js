import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction
} from "../../../redux/game/actions";

const FifthMinderaDecember = ({
  gameDetails,
  minderaFiveDec,
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
      minderaFiveDec: {
        ...gameDetails.timestamps.minderaFiveDec,
        gifts: text
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
            angularSkills: 95,
            vueSkills: 95
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            cplusplusSkills: 95,
            golangSkills: 95,
            phpSkills: 95,
            pythonSkills: 95,
            rubySkills: 95
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            dartSkills: 95,
            flutterSkills: 95,
            swiftSkills: 95,
            reactNativeSkills: 95
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#december${gameDetails.startingYear + 5}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I decided to offer a gift to each of my coworkers because it's
        Christmas!
      </p>
      {!minderaFiveDec.gifts && (
        <GameQuestion
          question="My team has 10 minders! What am I going to offer to each one?"
          op1="A mug (5€)"
          op2="A playstation (300€)"
          op3="A nice t-shirt (20€)"
          op4="An electric scooter (150€)"
          onClickOp1={() => {
            setOption("a mug");
            updateBalance(gameDetails.bankBalance - 5 * 10);
          }}
          onClickOp2={() => {
            setOption("a playsation");
            updateBalance(gameDetails.bankBalance - 300 * 10);
          }}
          onClickOp3={() => {
            setOption("a nice t-shirt");
            updateBalance(gameDetails.bankBalance - 20 * 10);
          }}
          onClickOp4={() => {
            setOption("an eletric scooter");
            updateBalance(gameDetails.bankBalance - 150 * 10);
          }}
        />
      )}

      {minderaFiveDec.gifts && (
        <p>I gave all my coworkers {minderaFiveDec.gifts}</p>
      )}

      {minderaFiveDec.gifts && !minderaFiveDec.isFinished && (
        <NextButton
          action={() => {
            updateSkillsLevel(gameDetails.career);
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
    minderaFiveDec: state.game.gameInfo.timestamps.minderaFiveDec
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
        minderaFiveDec: {
          ...timestamps.minderaFiveDec,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FifthMinderaDecember);
