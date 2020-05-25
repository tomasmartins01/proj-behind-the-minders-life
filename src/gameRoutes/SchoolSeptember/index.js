import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../components/game/StoryText";
import Image from "../../components/utils/Image";

import { endGameAction, updateTimeBoxAction } from "../../redux/game/actions";

import Schedule from "../../images/game/gameSchedule.png";

const SchoolSeptember = ({
  formDetails,
  gameDetails,
  timestamps,
  stayRoute,
  leaveRoute,
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
      <div className="gameEmail" style={{ width: "100%", marginTop: "10px" }}>
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
            <p>Hello {formDetails.fullName},</p>
            <p>
              Sorry for our late reply, but we would like you to know that you{" "}
              have been accepted in our university.
            </p>
          </div>
          {timestamps.schoolSep.differentRoute === undefined && (
            <div className="gameQuestion">
              <p>What will you do?</p>
              <div className="buttonSelector">
                <button onClick={() => stayRoute(timestamps)}>
                  Stay in Mindera
                </button>
                <button onClick={() => leaveRoute(timestamps)}>
                  Join University
                </button>
              </div>
            </div>
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
          {timestamps.schoolSep.differentRoute === false && (
            <>
              <p>You decided to stay in Mindera School.</p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  goToNext(timestamps);
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
    timestamps: state.game.gameInfo.timestamps
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
