import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton, EndButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  endGameAction
} from "../../../redux/game/actions";
import mindersList from "../../../helpers/mindersList";

const FifthMinderaMarch = ({
  gameDetails,
  minderaFiveMar,
  updateBox,
  updateBalance,
  endGame,
  goToNext
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  const mindersName = mindersList.map(minder => minder.name);

  const [minderSelected, setMinderSelected] = useState(
    mindersName[(Math.random() * (mindersName.length - 1)).toFixed()]
  );

  const setOption = (id, text) => {
    switch (id) {
      case "talk":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveMar: {
            ...gameDetails.timestamps.minderaFiveMar,
            talkChoice: text
          }
        });
        break;
      case "excuse":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveMar: {
            ...gameDetails.timestamps.minderaFiveMar,
            excuseText: text
          }
        });
        break;
    }
  };

  const getText = text => {
    switch (text) {
      case "sickness":
        return "Paul insists to take me home and in the car he told me he will give me a raise.";
      case "project":
        return "It's okay for him. Maybe another time.";
      case "pregnant grandfather":
        return "I couldn't come with a better excuse and now Paul is mad at me. He fired me.";
      default:
        return;
    }
  };

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 6}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        Paul wanted to talk to me. {minderSelected} is making fun of me because{" "}
        (s)he thinks I'll be fired.
      </p>
      {minderaFiveMar.talkChoice === undefined && (
        <GameQuestion
          question="What are you gonna do?"
          op1="Talk to him"
          op2="Make up an excuse"
          onClickOp1={() => setOption("talk", true)}
          onClickOp2={() => setOption("talk", false)}
        />
      )}
      {minderaFiveMar.talkChoice && (
        <p>
          The conversation went pretty well. Actually, he wants to give me a{" "}
          raise.
        </p>
      )}

      {minderaFiveMar.talkChoice === false && (
        <>
          {!minderaFiveMar.excuseText && (
            <GameQuestion
              question="What excuse are you giving to him?"
              op1="I don't feel very good, I'm going home"
              op2="I'm with some problems with my project"
              op3="My grandfather is pregnant and needs my help"
              onClickOp1={() => setOption("excuse", "sickness")}
              onClickOp2={() => setOption("excuse", "project")}
              onClickOp3={() => setOption("excuse", "pregnant grandfather")}
            />
          )}

          {minderaFiveMar.excuseText && (
            <p>{getText(minderaFiveMar.excuseText)}</p>
          )}
        </>
      )}
      {minderaFiveMar.excuseText === "pregnant grandfather" && (
        <EndButton
          action={() => {
            goToNext(gameDetails.timestamps);
            endGame();
          }}
        />
      )}

      {(minderaFiveMar.talkChoice ||
        (minderaFiveMar.excuseText &&
          minderaFiveMar.excuseText !== "pregnant grandfather")) &&
        !minderaFiveMar.isFinished && (
          <NextButton
            action={() => {
              updateBalance(gameDetails.bankBalance + 700 * 3);
              setIsOpen(false);
              goToNext(gameDetails.timestamps);
            }}
          />
        )}
    </StoryText>
  );
};

const mapStateToProps = state => {
  return {
    gameDetails: state.game.gameInfo,
    minderaFiveMar: state.game.gameInfo.timestamps.minderaFiveMar
  };
};

const mapDispatchToProps = dispatch => ({
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  endGame: () => dispatch(endGameAction()),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFiveMar: {
          ...timestamps.minderaFiveMar,
          isFinished: true
        }
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(FifthMinderaMarch);
