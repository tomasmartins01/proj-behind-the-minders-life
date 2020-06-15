import React from "react";

const Mindera3Sep = ({ timestamps }) => {
  const robberyAction = timestamps.minderaThreeSep.robberyAction;
  return (
    <article>
      {timestamps.minderaThreeSep.isFinished && (
        <>{robberyAction && <p>You decided to {robberyAction}.</p>}</>
      )}
    </article>
  );
};

const Mindera3Dec = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaThreeDec.isFinished && (
        <>
          {timestamps.minderaThreeDec.giftDecision && (
            <p>You decided to {timestamps.minderaThreeDec.giftDecision}.</p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera3Mar = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaThreeMar.isFinished && (
        <>
          <p>
            You received a bonus for your hardwork due to nice feedback from
            your clients.
          </p>
        </>
      )}
    </article>
  );
};

const Mindera3Jun = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaThreeJun.isFinished && (
        <>
          <p>
            You spent {timestamps.minderaThreeJun.vacationMoney} euros to go to{" "}
            {timestamps.minderaThreeJun.vacationPlace}.
          </p>
        </>
      )}
    </article>
  );
};

const MinderaThirdChoices = ({ timestamps }) => {
  return (
    <>
      <Mindera3Sep timestamps={timestamps} />
      <Mindera3Dec timestamps={timestamps} />
      <Mindera3Mar timestamps={timestamps} />
      <Mindera3Jun timestamps={timestamps} />
    </>
  );
};

export default MinderaThirdChoices;
