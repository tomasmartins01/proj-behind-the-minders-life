import React, { useState } from "react";
import { connect } from "react-redux";

import Image from "../components/utils/Image";
import StoryText from "../components/game/StoryText";
import StoryOptions from "../components/game/StoryOptions";
import { endGameAction } from "../redux/game/actions";

import InterviewQuestion from "../images/game/interviewQuestion.png";

const InterviewJune = ({ formDetails, gameDetails, endGame }) => {
  const [javaInput, setJavaInput] = useState("");
  const [success, setSuccess] = useState(undefined);

  const handleInterviewSubmit = e => {
    e.preventDefault();
    const inputRegex = / ?System.out.println ?\( ?"(H|h)ello, (W|w)orld!" ?\) ?; ?/g;
    const checkInput = javaInput.match(inputRegex);
    if (checkInput) {
      // typeof checkInput = object (array)
      setSuccess(true);
    } else {
      // typeof checkInput = null;
      setSuccess(false);
      endGame();
    }
  };

  return (
    <StoryText hashtag={`#june${gameDetails.startingYear}`}>
      <p className="helloTitle">Hello {formDetails.fullName}!</p>
      <p>
        This interview will help us know if you have the characteristics and
        abilities we're looking for.
      </p>
      {success === undefined && (
        <div className="gameQuestion">
          <p>Complete the following statement in Java:</p>
          <form>
            <Image
              imageSrc={InterviewQuestion}
              alt="Java Code"
              cName="interviewQuestion"
            />
            <input
              type="text"
              value={javaInput}
              onChange={e => {
                setJavaInput(e.target.value);
              }}
            />
            <button
              onClick={e => handleInterviewSubmit(e)}
              disabled={!javaInput}
            >
              Send solution
            </button>
          </form>
        </div>
      )}
      {success && <p>Congratulations</p>}
      {success === false && <p>You're so fucking dumb</p>}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    formDetails: state.form.formDetails,
    gameDetails: state.game.gameInfo
  };
};

const mapDispatchToProps = dispatch => ({
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewJune);
