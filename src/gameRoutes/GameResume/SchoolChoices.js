import React from "react";

const SchoolSepChoices = ({ timestamps }) => {
  return (
    <article>
      {timestamps.schoolSep.isFinished && (
        <>
          {timestamps.schoolSep.differentRoute && (
            <p>You decided to go to university.</p>
          )}

          {timestamps.schoolSep.differentRoute === false && (
            <>
              <p>
                When the opportunity of go to university came, you decided to
                stay in Mindera School.
              </p>

              {timestamps.schoolSep.wentToMinderaParty ? (
                <p>
                  You decided to go to Mindera's birthday party and had a lot of
                  fun.
                </p>
              ) : (
                <p>
                  You were occupied at Mindera's birthday party night and missed
                  so many funny moments.
                </p>
              )}
            </>
          )}
        </>
      )}
    </article>
  );
};

const SchoolDecChoices = ({ timestamps, gameDetails }) => {
  return (
    <article>
      {timestamps.schoolDec.isFinished && (
        <>
          <div>
            {timestamps.schoolDec.triedBackendQuiz && (
              <p>
                You made a Backend quiz. Your results were{" "}
                {timestamps.schoolDec.correctAnswersBE} out of{" "}
                {timestamps.schoolDec.quizNumberOfQuestions}.
                {timestamps.schoolDec.correctAnswersBE >=
                  timestamps.schoolDec.quizNumberOfQuestions / 2 && (
                  <span> Congratulations.</span>
                )}
              </p>
            )}

            {timestamps.schoolDec.triedFrontendQuiz && (
              <p>
                You made a Frontend quiz. Your results were{" "}
                {timestamps.schoolDec.correctAnswersFE} out of{" "}
                {timestamps.schoolDec.quizNumberOfQuestions}.
                {timestamps.schoolDec.correctAnswersFE >=
                  timestamps.schoolDec.quizNumberOfQuestions / 2 && (
                  <span> Congratulations.</span>
                )}
              </p>
            )}

            {timestamps.schoolDec.triedMobileQuiz && (
              <p>
                You made a Mobile quiz. Your results were{" "}
                {timestamps.schoolDec.correctAnswersMB} out of{" "}
                {timestamps.schoolDec.quizNumberOfQuestions}.
                {timestamps.schoolDec.correctAnswersMB >=
                  timestamps.schoolDec.quizNumberOfQuestions / 2 && (
                  <span>Congratulations.</span>
                )}
              </p>
            )}
          </div>

          {timestamps.schoolDec.correctAnswersBE <
            timestamps.schoolDec.quizNumberOfQuestions / 2 &&
            timestamps.schoolDec.correctAnswersFE <
              timestamps.schoolDec.quizNumberOfQuestions / 2 &&
            timestamps.schoolDec.correctAnswersMB <
              timestamps.schoolDec.quizNumberOfQuestions / 2 && (
              <p>
                Since you failed all the quizzes, you couldn't continue in{" "}
                Mindera School.
              </p>
            )}

          {gameDetails.specialization && (
            <p>
              You choose to be a {gameDetails.specialization} developer.
            </p>
          )}

          {timestamps.schoolDec.wentToMinderaParty && (
            <p>
              Mindera threw a Christmas party and you decided to go and have
              fun.
            </p>
          )}
          {timestamps.schoolDec.wentToMinderaParty === false && (
            <p>
              Mindera threw a Christmas party but you decided to bail and go
              home.
            </p>
          )}
        </>
      )}
    </article>
  );
};

const SchoolMarChoices = ({ timestamps, gameDetails }) => {
  return (
    <article>
      {timestamps.schoolMar.isFinished && (
        <>
          <p>You chose to {timestamps.schoolMar.choiceMade}.</p>

          <p>
            You decided to make a {gameDetails.specialization} project about{" "}
            {timestamps.schoolMar.projectPicked} with{" "}
            {timestamps.schoolMar.languagePicked}.
          </p>
        </>
      )}
    </article>
  );
};

const SchoolJunChoices = ({ timestamps, gameDetails }) => {
  return (
    <article>
      {timestamps.schoolJun.isFinished && (
        <p>
          During your presentation about {timestamps.schoolMar.projectPicked}{" "}
          you felt {timestamps.schoolJun.presentationFeeling}.
        </p>
      )}
    </article>
  );
};

const SchoolChoices = ({ timestamps, gameDetails }) => {
  return (
    <>
      <SchoolSepChoices timestamps={timestamps} />
      <SchoolDecChoices timestamps={timestamps} gameDetails={gameDetails} />
      <SchoolMarChoices timestamps={timestamps} gameDetails={gameDetails} />
      <SchoolJunChoices timestamps={timestamps} />
    </>
  );
};

export default SchoolChoices;
