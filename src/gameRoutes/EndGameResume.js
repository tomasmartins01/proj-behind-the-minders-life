import React from "react";
import { connect } from "react-redux";

const EndGameResume = ({ formDetails, gameDetails, timestamps }) => {
  return (
    <div className="endGame">
      <section>
        <h3>{formDetails.fullName}'s life choices</h3>
      </section>
      <section>
        {/* Interview June Choices */}
        {timestamps.interviewJune.isFinished && (
          <>
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
          </>
        )}

        {/* School September Choices */}
        {timestamps.schoolSep.isFinished && (
          <>
            {timestamps.schoolSep.differentRoute && (
              <article>You decided to go to university.</article>
            )}

            {timestamps.schoolSep.differentRoute === false && (
              <>
                <article>
                  When the opportunity of go to university came, you decided to
                  stay in Mindera School.
                </article>

                {timestamps.schoolSep.wentToMinderaParty ? (
                  <article>
                    You decided to go to Mindera's birthday party and had a lot
                    of fun.
                  </article>
                ) : (
                  <article>
                    You were occupied at Mindera's birthday party night and
                    missed so many funny moments.
                  </article>
                )}
              </>
            )}
          </>
        )}

        {/* School December Choices */}
        {timestamps.schoolDec.isFinished && (
          <>
            {timestamps.schoolDec.triedBackendQuiz && (
              <article>
                You made a Backend quiz. Your results were{" "}
                {timestamps.schoolDec.correctAnswersBE} out of{" "}
                {timestamps.schoolDec.quizNumberOfQuestions}.
                {timestamps.schoolDec.correctAnswersBE >=
                  timestamps.schoolDec.quizNumberOfQuestions / 2 && (
                  <span> Congratulations.</span>
                )}
              </article>
            )}

            {timestamps.schoolDec.triedFrontendQuiz && (
              <article>
                You made a Frontend quiz. Your results were{" "}
                {timestamps.schoolDec.correctAnswersFE} out of{" "}
                {timestamps.schoolDec.quizNumberOfQuestions}.
                {timestamps.schoolDec.correctAnswersFE >=
                  timestamps.schoolDec.quizNumberOfQuestions / 2 && (
                  <span> Congratulations.</span>
                )}
              </article>
            )}

            {timestamps.schoolDec.triedMobileQuiz && (
              <article>
                You made a Mobile quiz. Your results were{" "}
                {timestamps.schoolDec.correctAnswersMB} out of{" "}
                {timestamps.schoolDec.quizNumberOfQuestions}.
                {timestamps.schoolDec.correctAnswersMB >=
                  timestamps.schoolDec.quizNumberOfQuestions / 2 && (
                  <span>Congratulations.</span>
                )}
              </article>
            )}

            {timestamps.schoolDec.correctAnswersBE <
              timestamps.schoolDec.quizNumberOfQuestions &&
              timestamps.schoolDec.correctAnswersFE <
                timestamps.schoolDec.quizNumberOfQuestions &&
              timestamps.schoolDec.correctAnswersMB <
                timestamps.schoolDec.quizNumberOfQuestions && (
                <article>
                  Since you failed all the quizzes, you couldn't continue in{" "}
                  Mindera School.
                </article>
              )}

            {gameDetails.specialization && (
              <article>
                You choose to be a {gameDetails.specialization} developer.
              </article>
            )}

            {timestamps.schoolDec.wentToMinderaParty && (
              <article>
                Mindera threw a Christmas party and you decided to go and have fun.
              </article> 
            )}
            {timestamps.schoolDec.wentToMinderaParty === false && (
              <article>
              Mindera threw a Christmas party but you decided to bail and go home.
              </article> 
            )}
          </>
        )}

        {/* School March Choices */}
        {timestamps.schoolMar.isFinished && (
          <>
          <article>
          You chose to {timestamps.schoolMar.choiceMade}.
          </article>

          <article>
            You decided to make a {gameDetails.specialization} project about {timestamps.schoolMar.projectPicked}.
          </article>
        
          </>
        )
        
        }

        {/* School June Choices */}
        {timestamps.schoolJun.isFinished && (
          <article>
            During your presentation about {timestamps.schoolMar.projectPicked}{" "}
            you felt {timestamps.schoolJun.presentationFeeling}.
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
