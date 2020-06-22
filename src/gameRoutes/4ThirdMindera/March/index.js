import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction
} from "../../../redux/game/actions";

const ThirdMinderaMarch = ({ gameDetails, updateBankBalance, updateSkills, goToNext }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            reactjsSkills: 100,
            angularSkills: 40,
            vueSkills: 40
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            cplusplusSkills: 40,
            golangSkills: 40,
            phpSkills: 40,
            pythonSkills: 40,
            rubySkills: 40
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            dartSkills: 40,
            flutterSkills: 40,
            swiftSkills: 40,
            reactNativeSkills: 40
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 4}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I received superpositive feedback from the clients and the whole team{" "}
        received a bonus.
      </p>
      <NextButton
        action={() => {
          updateBankBalance(gameDetails.bankBalance + 600 * 3 + 200);
          updateSkillsLevel(gameDetails.career);
          setIsOpen(false);
          goToNext(gameDetails.timestamps);
        }}
      />
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo
  };
};

const mapDispatchToProps = dispatch => ({
  updateBankBalance: bankBalance =>
    dispatch(updateBankBalanceAction(bankBalance)),
    updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaThreeMar: {
          ...timestamps.minderaThreeMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(ThirdMinderaMarch);
