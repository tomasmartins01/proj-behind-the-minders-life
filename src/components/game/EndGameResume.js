import React from "react";
import { connect } from "react-redux";

const EndGameResume = ({ formDetails, gameDetails, timestamps }) => {
  return (
    <div className="endGame">
      <section>
        <h3>{formDetails.fullName}'s life</h3>
      </section>
      <section>
        {/* Interview June Choices */}
        {timestamps.interviewJune.characterPassedTheInterview ? (
          <article>
            You successfully tried to enter Mindera School with a{" "}
            {gameDetails.prevExperience}'s question.
          </article>
        ) : (
          <article>
            You unsuccessfully tried to enter Mindera School with a{" "}
            {gameDetails.prevExperience}'s question.
          </article>
        )}

        {/* School September Choices */}
        {timestamps.schoolSep.differentRoute && (
          <article>You decided to go to university.</article>
        )}

        {timestamps.schoolSep.differentRoute === false && (
          <article>
            When the opportunity of go to university came, you decided to stay
            in Mindera School.
          </article>
        )}
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formDetails: state.form.formDetails,
    gameDetails: state.game.gameInfo,
    timestamps: state.game.gameInfo.timestamps
  };
};

export default connect(mapStateToProps)(EndGameResume);
