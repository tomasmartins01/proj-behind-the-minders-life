import React from "react";

const Mindera1Sep = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaOneSep.isFinished && (
        <>
          {timestamps.minderaOneSep.optionAfterSchool && (
            <p>You decided to {timestamps.minderaOneSep.optionAfterSchool}</p>
          )}

          {timestamps.minderaOneSep.optionAfterSchool && (
            <p>You decided to {timestamps.minderaOneSep.optionAfterSchool}</p>
          )}

          {timestamps.minderaOneSep.passedTheInterview === false && (
            <p>You've done the interview, but you didn't passed.</p>
          )}

          {timestamps.minderaOneSep.passedTheInterview && (
            <p>
              You've done the interview and passed. They offered you a contract{" "}
              {timestamps.minderaOneSep.acceptedContract
                ? `and you were part of Mindera as ${career}.`
                : "but you changed your mind."}
            </p>
          )}
        </>
      )}
    </article>
  );
};

const MinderaFirstChoices = ({ timestamps, gameDetails }) => {
  return (
    <>
      <Mindera1Sep timestamps={timestamps} />
    </>
  );
};

export default MinderaFirstChoices;
