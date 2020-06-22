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

const ThirdMinderaDecember = ({
  gameDetails,
  minderaThreeDec,
  updateSkills,
  updateBalance,
  updateBox,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const setOption = decision => {
    updateBox({
      ...gameDetails.timestamps,
      minderaThreeDec: {
        ...gameDetails.timestamps.minderaThreeDec,
        giftDecision: decision
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
            jsSkills: 100,
            reactjsSkills: 97
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
      hashtag={`#december${gameDetails.startingYear + 3}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        This year at the secret friend's party you received an ugly pair of
        socks.
      </p>
      {!minderaThreeDec.giftDecision && (
        <GameQuestion
          question="How are you going to react?"
          op1="thank although I don't like it very much"
          op2="throw the socks off the balcony of the 404"
          op3="I really enjoyed this gift"
          onClickOp1={() => setOption("be thankful for the gift")}
          onClickOp2={() => setOption("be rude to your coworkers")}
          onClickOp3={() => setOption("be super nice to your coworkers")}
        />
      )}
      {minderaThreeDec.giftDecision && (
        <p>
          After you received the gift, you decided to{" "}
          {minderaThreeDec.giftDecision}.
        </p>
      )}
      {minderaThreeDec.giftDecision && !minderaThreeDec.isFinished && (
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
    minderaThreeDec: state.game.gameInfo.timestamps.minderaThreeDec
  };
};

const mapDispatchToProps = dispatch => ({
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaThreeDec: {
          ...timestamps.minderaThreeDec,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdMinderaDecember);
