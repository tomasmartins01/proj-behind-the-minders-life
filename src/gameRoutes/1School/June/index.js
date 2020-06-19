import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton, EndButton } from "../../../components/game/GameButtons";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction,
  endGameAction
} from "../../../redux/game/actions";

import { updateAgeAction } from "../../../redux/formInfo/actions";

const SchoolJune = ({
  formAge,
  gameDetails,
  schoolMar,
  schoolJun,
  presentationFeeling,
  increaseBalance,
  increaseAge,
  updateSkills,
  endGame,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const setPresentationFeeling = feeling => {
    presentationFeeling({
      ...gameDetails.timestamps,
      schoolJun: { ...schoolJun, presentationFeeling: feeling }
    });
  };

  const setSkills = () => {
    updateSkills({
      ...gameDetails.skillsLevel,
      backend: { ...gameDetails.skillsLevel.backend, javaSkills: 60 },
      frontend: {
        ...gameDetails.skillsLevel.frontend,
        htmlSkills: 80,
        cssSkills: 60,
        jsSkills: 60
      },
      mobile: {
        ...gameDetails.skillsLevel.mobile,
        reactNativeSkills: 60,
        kotlinSkills: 60
      }
    });
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 1}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!schoolJun.presentationFeeling && (
        <GameQuestion
          question="Today is the project presentation day, I'm feeling.."
          op1="Nervous"
          op2="Confident"
          op3="Insecure"
          onClickOp1={() => setPresentationFeeling("nervous")}
          onClickOp2={() => setPresentationFeeling("confident")}
          onClickOp3={() => setPresentationFeeling("insecure")}
        />
      )}
      {schoolJun.presentationFeeling === "nervous" && (
        <>
          <p>
            The teachers didnt like my presentation about a{" "}
            {schoolMar.projectPicked} app. I think I will no longer be part of
            the Mindera {gameDetails.startingYear} class.
            <EndButton
              action={() => {
                goToNext(gameDetails.timestamps);
                endGame();
              }}
            />
          </p>
        </>
      )}
      {schoolJun.presentationFeeling === "confident" && (
        <>
          <p>
            I think my presentation about a {schoolMar.projectPicked} app went
            really great, all the teachers seemed to like the project!
          </p>
        </>
      )}
      {schoolJun.presentationFeeling === "insecure" && (
        <>
          <p>
            The teachers loved my project ideia of a {schoolMar.projectPicked}{" "}
            app but I should have practiced more.
          </p>
        </>
      )}
      {!schoolJun.isFinished &&
        schoolJun.presentationFeeling &&
        schoolJun.presentationFeeling !== "nervous" && (
          <NextButton
            action={() => {
              setSkills();
              increaseBalance(gameDetails.bankBalance + 300 * 3);
              increaseAge(formAge + 1);
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
    formAge: state.form.formDetails.age,
    gameDetails: state.game.gameInfo,
    schoolMar: state.game.gameInfo.timestamps.schoolMar,
    schoolJun: state.game.gameInfo.timestamps.schoolJun
  };
};

const mapDispatchToProps = dispatch => ({
  presentationFeeling: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  increaseAge: age => dispatch(updateAgeAction(age)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolJun: {
          ...timestamps.schoolJun,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolJune);
