import React from "react";

const Mindera1Sep = ({ timestamps }) => {
  return (
    <article>
    {timestamps.minderaOneSep.isFinished && (
      <>
        {timestamps.minderaOneSep.option && (
          <p>You decided to {timestamps.minderaOneSep.option}</p>
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