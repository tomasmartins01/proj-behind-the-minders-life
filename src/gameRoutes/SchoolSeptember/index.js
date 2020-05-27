import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";
import GameQuestion from "../../components/game/GameQuestion";

import {
  endGameAction,
  updateBankBalanceAction,
  updateTimeBoxAction,
  updateHappinessAction,
  updateSkillsAction
} from "../../redux/game/actions";

import Schedule from "../../images/game/gameSchedule.png";

const SchoolSeptember = ({
  formDetails,
  gameDetails,
  timestamps,
  skillsLevel,
  stayRoute,
  leaveRoute,
  updateHappiness,
  updateSkills,
  increaseBalance,
  goToNext,
  endGame
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <div className="gameBox">
        <p>Welcome again Mindernaut!!</p>
        <p>We're very happy to show you your schedule.</p>
        <img
          src={Schedule}
          alt="schedule"
          style={{ width: "500px", height: "180px" }}
        />
      </div>
      {formDetails.age <= 23 && (
        <>
          <p>But you also recieved an email from your dream university...</p>
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
          {timestamps.schoolSep.differentRoute === undefined && (
            <GameQuestion
              question="What will you do?"
              op1="Stay in Mindera"
              op2="Join University"
              onClickOp1={() => {
                stayRoute(timestamps);
                updateHappiness(85);
              }}
              onClickOp2={() => leaveRoute(timestamps)}
            />
          )}
          {timestamps.schoolSep.differentRoute && (
            <>
              <p>
                You decided to go to university first. In the future you will{" "}
                try to join Mindera Team.
              </p>
              <button
                onClick={() => {
                  goToNext(timestamps);
                  endGame();
                }}
              >
                END
              </button>
            </>
          )}
          {timestamps.schoolSep.differentRoute === false &&
            !timestamps.schoolSep.isFinished && (
              <>
                <p>You decided to stay in Mindera School.</p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    goToNext(timestamps);
                    updateSkills(skillsLevel);
                    increaseBalance(600 * 3);
                  }}
                >
                  NEXT
                </button>
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
    timestamps: state.game.gameInfo.timestamps,
    skillsLevel: state.game.gameInfo.skillsLevel
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
  increaseBalance: bankbalance =>
    dispatch(updateBankBalanceAction(bankbalance)),
  updateHappiness: happiness => dispatch(updateHappinessAction(happiness)),
  updateSkills: skillsLevel =>
    dispatch(
      updateSkillsAction({
        ...skillsLevel,
        socialSkills: 70,
        programmingSkills: 60,
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
      })
    ),
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
