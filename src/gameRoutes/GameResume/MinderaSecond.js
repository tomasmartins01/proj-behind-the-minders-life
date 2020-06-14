import React from "react";

const Mindera2Sep = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaTwoSep.isFinished && (
        <>
          {timestamps.minderaTwoSep.birthdayAction && (
            <p>You decided to {timestamps.minderaTwoSep.birthdayAction}.</p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera2Dec = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaTwoDec.isFinished && (
        <>
          {timestamps.minderaTwoDec.tripDecision && (
            <p>You decided to the Alps with Mindera.</p>
          )}
          {!timestamps.minderaTwoDec.tripDecision && (
            <p>You decided to not go to the Alps with your team.</p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera2Mar = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaTwoMar.isFinished && (
        <>
          {timestamps.minderaTwoMar.pcbrokeToDo === "Do nothing" && (
            <p>
              You decided to not do anything and you lost your job because of
              it.
            </p>
          )}
          {timestamps.minderaTwoMar.pcbrokeToDo ===
            "Ask Caldas for a new one" && (
            <p>
              You asked Caldas for a new computer but he didn´t have any, so he
              recomended a pc building website for you. PcBudget.
            </p>
          )}
          {timestamps.minderaTwoMar.pcbrokeToDo ===
            "Build your own computer" && (
            <p>
              You decided to build your own computer using a pc building website
              called PcBudget.
            </p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera2Jun = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaTwoJun.isFinished && (
        <>
          {timestamps.minderaTwoJun.wentToLanParty && (
            <p>You went to a LAN party.</p>
          )}
        </>
      )}
    </article>
  );
};

const MinderaSecondChoices = ({ timestamps }) => {
  return (
    <>
      <Mindera2Sep timestamps={timestamps} />
      <Mindera2Dec timestamps={timestamps} />
      <Mindera2Mar timestamps={timestamps} />
      <Mindera2Jun timestamps={timestamps} />
    </>
  );
};

export default MinderaSecondChoices;
