import React from "react";

const Mindera5Sep = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaFiveSep.isFinished && (
        <>
          {timestamps.minderaFiveSep.hasAskedQuestion && (
            <p>
              You decided to do the best thing and ask Irina about the client's
              request.
            </p>
          )}
          {!timestamps.minderaFiveSep.hasAskedQuestion && (
            <p>
              You decided not to clarify the client's request and finish the
              project anyway.
            </p>
          )}
          {timestamps.minderaFiveSep.helpTests && (
            <p>
              When you needed help with tests, you asked{" "}
              {timestamps.minderaFiveSep.helpTests} to help.
            </p>
          )}
          {timestamps.minderaFiveSep.helpSeo && (
            <p>
              When you needed help with your SEO performance, you asked{" "}
              {timestamps.minderaFiveSep.helpSeo} to help.
            </p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera5Dec = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaFiveDec.isFinished && (
        <>
          {timestamps.minderaFiveDec.gifts && (
            <p>
              At the Mindera Christmas party you gave{" "}
              {timestamps.minderaFiveDec.gifts} to your coworkers.
            </p>
          )}
        </>
      )}
    </article>
  );
};

const Mindera5Mar = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaFiveMar.isFinished && (
        <>
          {timestamps.minderaFiveMar.talkChoice && (
            <p>
              You decided to talk with Paul and he told you about your raise.
            </p>
          )}

          {!timestamps.minderaFiveMar.talkChoice &&
            timestamps.minderaFiveMar.excuseText && (
              <p>
                You thought Paul wanted to fire you and you said you{" "}
                {timestamps.minderaFiveMar.excuseText}.
                {timestamps.minderaFiveMar.excuseText ===
                  "had a pregnant grandfather" && (
                  <span>You were fired anyways.</span>
                )}
              </p>
            )}
        </>
      )}
    </article>
  );
};

const Mindera5Jun = ({ timestamps }) => {
  return (
    <article>
      {timestamps.minderaFiveJun.isFinished && (
        <>
          {!timestamps.minderaFiveJun.helpChoice && (
            <p>
              You decided to stay home instead of going to mindera to help your
              coworker with something because you're very busy...
            </p>
          )}

          {timestamps.minderaFiveJun.helpChoice && (
            <p>
              You decided to go to Mindera to help your coworker. There was a
              surprise birthday party waiting for you!
            </p>
          )}

          {timestamps.minderaFiveJun.birthdayText && (
            <p>
              During your party, you said you{" "}
              {timestamps.minderaFiveJun.birthdayText}.
            </p>
          )}
        </>
      )}
    </article>
  );
};

const MinderaFifthChoices = ({ timestamps }) => {
  return (
    <>
      <Mindera5Sep timestamps={timestamps} />
      <Mindera5Dec timestamps={timestamps} />
      <Mindera5Mar timestamps={timestamps} />
      <Mindera5Jun timestamps={timestamps} />
    </>
  );
};

export default MinderaFifthChoices;
