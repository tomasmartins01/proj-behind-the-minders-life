import React from "react";

const InterviewChoices = ({ timestamps, gameDetails }) => {
  return (
    <article>
      {timestamps.interviewJune.isFinished && (
        <>
          {timestamps.interviewJune.characterPassedTheInterview ? (
            <p>
              You successfully tried to enter Mindera School with a{" "}
              {gameDetails.prevExperience}'s question.
            </p>
          ) : (
            <p>
              You unsuccessfully tried to enter Mindera School with a{" "}
              {gameDetails.prevExperience}'s question.
            </p>
          )}
        </>
      )}
    </article>
  );
};

export default InterviewChoices;