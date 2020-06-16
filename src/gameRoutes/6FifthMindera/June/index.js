import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";

import {
  updateTimeBoxAction,
  endGameAction
} from "../../../redux/game/actions";

import { EndButton } from "../../../components/game/GameButtons";
import mindersList from "../../../helpers/mindersList";
import GameQuestion from "../../../components/game/GameQuestion";

const FifthMinderaJune = ({
  gender,
  gameDetails,
  updateBox,
  minderaFiveJun,
  goToNext,
  endGame
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const mindersName = mindersList.map(minder => minder.name);

  const [minderSelected, setMinderSelected] = useState(
    mindersName[(Math.random() * (mindersName.length - 1)).toFixed()]
  );

  const setOption = (id, text) => {
    switch (id) {
      case "help":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveJun: {
            ...gameDetails.timestamps.minderaFiveJun,
            helpChoice: text
          }
        });
        break;
      case "birthday":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveJun: {
            ...gameDetails.timestamps.minderaFiveJun,
            birthdayText: text
          }
        });
    }
  };

  return (
    <StoryText
      hashtag={`#june${gameDetails.startingYear + 6}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        {minderSelected} asked me to help with something tonight at
        Mindera...weird.
      </p>
      {minderaFiveJun.helpChoice === undefined && (
        <GameQuestion
          question="What should I do?"
          op1="I'm busy..."
          op2="Fine, let's see what this is about, I don't have anything to do so..."
          onClickOp1={() => setOption("help", false)}
          onClickOp2={() => setOption("help", true)}
        />
      )}
      {minderaFiveJun.helpChoice && (
        <>
          <p>
            I decided to go to Mindera and it turns out to be a SURPRISE{" "}
            BIRTHDAY PARTY FOR ME!!!
          </p>

          {!minderaFiveJun.birthdayText && (
            <>
              <p>I think this is the best time to tell this...</p>
              <GameQuestion
                question="Should I say?"
                op1="I'm leaving Mindera temporarily to travel the WORLD!"
                op2={`I'm going be a ${gender === "F" ? "mom" : "dad"}!`}
                op3="I'm starting my own professional bowling team and I will be leaving Mindera :("
                op4="I LOVE MINDERA AND EVERY PERSON HERE!!!"
                onClickOp1={() =>
                  setOption(
                    "birthday",
                    "will leave Mindera temporarily to travel"
                  )
                }
                onClickOp2={() =>
                  setOption("birthday", "will have a child named Ruca")
                }
                onClickOp3={() =>
                  setOption(
                    "birthday",
                    "will start my own professional bowling team and leave Mindera"
                  )
                }
                onClickOp4={() =>
                  setOption("birthday", "love Mindera and everyone there")
                }
              />
            </>
          )}

          {minderaFiveJun.birthdayText && (
            <p>
              During my birthday party, I announced that I{" "}
              {minderaFiveJun.birthdayText}.
            </p>
          )}
        </>
      )}

      {(minderaFiveJun.helpChoice === false || minderaFiveJun.birthdayText) && (
        <EndButton
          action={() => {
            goToNext(gameDetails.timestamps);
            endGame();
          }}
        />
      )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gender: state.form.formDetails.gender,
    gameDetails: state.game.gameInfo,
    minderaFiveJun: state.game.gameInfo.timestamps.minderaFiveJun
  };
};

const mapDispatchToProps = dispatch => ({
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFiveJun: {
          ...timestamps.minderaFiveJun,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(FifthMinderaJune);
