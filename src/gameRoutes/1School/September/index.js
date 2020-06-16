import React, { useState } from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";
import { NextButton, EndButton } from "../../../components/game/GameButtons";

import {
  endGameAction,
  updateBankBalanceAction,
  updateTimeBoxAction,
  updateHappinessAction,
  updateSkillsAction
} from "../../../redux/game/actions";

import Schedule from "../../../images/game/gameSchedule.png";

const SchoolSeptember = ({
  formDetails,
  gameDetails,
  schoolSep,
  skillsLevel,
  stayRoute,
  leaveRoute,
  setBirthdayResponse,
  increaseBalance,
  updateHappiness,
  updateSkills,
  goToNext,
  endGame
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const updateSocial = skillsLevel => {
    updateSkills({
      ...skillsLevel,
      socialSkills: 50
    });
  };

  const updateSkillsFinal = skillsLevel => {
    updateSkills({
      ...skillsLevel,
      socialSkills: 70,
      backend: {
        ...skillsLevel.backend,
        javaSkills: 60,
        sqlSkills: 60
      },
      frontend: {
        ...skillsLevel.frontend,
        htmlSkills: 60,
        cssSkills: 60,
        jsSkills: 60
      },
      mobile: {
        ...skillsLevel.mobile,
        kotlinSkills: 60
      }
    });
  };

  const birthdayResponse = (timestamps, value) => {
    setBirthdayResponse({
      ...timestamps,
      schoolSep: {
        ...timestamps.schoolSep,
        wentToMinderaParty: value
      }
    });
  };

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <div className="gameBox">
        <p>Welcome again Mindernaut!!</p>
        <p>We're very happy to show you your schedule.</p>
        <LazyLoad once>
          <img src={Schedule} alt="schedule" />
        </LazyLoad>
      </div>

      {formDetails.age <= 23 && (
        <>
          <p>
            Oh... but I also recieved an email from my dream university...
            {schoolSep.differentRoute === false &&
              schoolSep.isFinished &&
              " But I decided to stay in Mindera School."}
          </p>
          <div className="gameEmail">
            <p>From: royaleUniversity@edu.com</p>
            <p>To: Me</p>
            <hr />
            <p>Hello {formDetails.fullName},</p>
            <p>
              Sorry for our late reply, but we would like you to know that you{" "}
              have been accepted in our university.
            </p>
          </div>

          {schoolSep.differentRoute === undefined && (
            <GameQuestion
              question="What should I do?"
              op1="Stay in Mindera"
              op2="Join University"
              onClickOp1={() => {
                stayRoute(gameDetails.timestamps);
                updateHappiness(85);
              }}
              onClickOp2={() => leaveRoute(gameDetails.timestamps)}
            />
          )}

          {schoolSep.differentRoute && (
            <>
              <p>
                I think i'll to university first. Maybe in the future I'll try{" "}
                to join Mindera Team.
              </p>
              <EndButton
                action={() => {
                  goToNext(gameDetails.timestamps);
                  endGame();
                }}
              />
            </>
          )}
        </>
      )}

      {((formDetails.age <= 23 && schoolSep.differentRoute === false) ||
        (formDetails.age > 23 && schoolSep.differentRoute === undefined)) && (
        <>
          <p>
            {formDetails.region !== "Porto" &&
              "So I moved to Porto to start Mindera School. "}
            {formDetails.country !== "Portugal" &&
              "Travelling to a different country is really thrilling."}
          </p>
          {!schoolSep.differentRoute && (
            <>
              {schoolSep.wentToMinderaParty === undefined && (
                <>
                  <p>I was invited to Mindera's birthday party.</p>
                  <GameQuestion
                    question="Will I go?"
                    op1="Yes"
                    op2="No, I have things to do"
                    onClickOp1={() => {
                      updateHappiness(90);
                      updateSocial(gameDetails.skillsLevel);
                      birthdayResponse(gameDetails.timestamps, true);
                    }}
                    onClickOp2={() => {
                      updateHappiness(60);
                      birthdayResponse(gameDetails.timestamps, false);
                    }}
                  />
                </>
              )}
              {schoolSep.wentToMinderaParty && (
                <p>I went to Mindera's birthday party and had a lot of fun.</p>
              )}
              {schoolSep.wentToMinderaParty === false && (
                <p>
                  I stayed home while all my colleagues and teachers were having
                  fun at Mindera's birthday party.
                </p>
              )}

              {schoolSep.wentToMinderaParty !== undefined &&
                !schoolSep.isFinished && (
                  <NextButton
                    action={() => {
                      updateSkillsFinal(gameDetails.skillsLevel);
                      increaseBalance(gameDetails.bankBalance + 300 * 3);
                      setIsOpen(false);
                      goToNext(gameDetails.timestamps);
                    }}
                  />
                )}
            </>
          )}
        </>
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    formDetails: state.form.formDetails,
    gameDetails: state.game.gameInfo,
    schoolSep: state.game.gameInfo.timestamps.schoolSep
  };
};

const mapDispatchToProps = dispatch => ({
  stayRoute: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolSep: {
          ...timestamps.schoolSep,
          differentRoute: false
        }
      })
    ),
  leaveRoute: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolSep: {
          ...timestamps.schoolSep,
          differentRoute: true
        }
      })
    ),
  setBirthdayResponse: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        schoolSep: {
          ...timestamps.schoolSep,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SchoolSeptember);
