import React from "react";

const Mindera1Sep = ({ gameDetails, timestamps }) => {
  return (
    <article>
      {timestamps.minderaOneSep.isFinished && (
        <>
          {timestamps.minderaOneSep.optionAfterSchool && (
            <p>You decided to {timestamps.minderaOneSep.optionAfterSchool}.</p>
          )}

          {timestamps.minderaOneSep.passedTheInterview === false && (
            <p>You've done the interview, but you didn't passed.</p>
          )}

          {timestamps.minderaOneSep.passedTheInterview && (
            <p>
              You've done the interview and passed. They offered you a contract{" "}
              {timestamps.minderaOneSep.acceptedContract
                ? `and you were part of Mindera as ${gameDetails.career} Developer.`
                : "but you changed your mind."}
            </p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera1Dec = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaOneDec.isFinished && (
        <>
          {timestamps.minderaOneDec.partyOrProject && (
            <p>You decided to {timestamps.minderaOneDec.partyOrProject}.</p>
          )}

          {timestamps.minderaOneDec.christmasPresent && (
            <p>
              You offered {timestamps.minderaOneDec.christmasPresent} for
              Christmas.
            </p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera1Mar = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaOneMar.isFinished && (
        <>
        {timestamps.minderaOneMar.dinnerFood && (
          <p>You ate {timestamps.minderaOneMar.dinnerFood}.</p>
        )}   
        </>
      )}
    </article>
  );
};

const Mindera1Jun = ({ timestamps}) => {
  return (
    <article>
      {timestamps.minderaOneJun.isFinished && (
        <>
        {timestamps.minderaOneJun.newProject && (
          <p>You chose to do {timestamps.minderaOneJun.newProject} for your new project.</p>
        )}
        </>
      )}
    </article>

  )
}
 
const MinderaFirstChoices = ({ timestamps, gameDetails }) => {
  return (
    <>
      <Mindera1Sep timestamps={timestamps} gameDetails={gameDetails} />
      <Mindera1Dec timestamps={timestamps} />
      <Mindera1Mar timestamps={timestamps} />
      <Mindera1Jun timestamps={timestamps} />
    </>
  );
};

export default MinderaFirstChoices;
