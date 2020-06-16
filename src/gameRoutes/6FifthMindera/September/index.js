import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import { NextButton } from "../../../components/game/GameButtons";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction
} from "../../../redux/game/actions";

import mindersList from "../../../helpers/mindersList";

const FifthMinderaSeptember = ({
  gameDetails,
  minderaFiveSep,
  updateBox,
  updateBalance,
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
      case "question":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveSep: {
            ...gameDetails.timestamps.minderaFiveSep,
            hasAskedQuestion: text
          }
        });
        break;

      case "tests":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveSep: {
            ...gameDetails.timestamps.minderaFiveSep,
            helpTests: text
          }
        });
        break;

      case "seoPerformance":
        updateBox({
          ...gameDetails.timestamps,
          minderaFiveSep: {
            ...gameDetails.timestamps.minderaFiveSep,
            helpSeo: text
          }
        });
        break;

      default:
        return null;
    }
  };

  const getHelpText = text => {
    switch (text) {
      case "my mom":
        return "My mom is actually pretty good at this, she got it done in 10 minutes...";
      case "Mehul Irá":
        return "Wow, my Backend code is amazing thanks to Mehul! But I still have problems with my unit tests...";
      case "Pedro Teixeira":
        return "Pedro said he's not the best person to help me.";
      case "Vitor Mineiro":
        return "Vitor solved my problem quickly.";

      case "Diogo Ferreira":
        return "Diogo is actually pretty amazing with Frontend stuff. He solved the SEO problem I'm dealing with.";
      case "Caldas":
        return "I chose the wrongest option for help. Caldas can't help me with, but I can eat some granola whenever I want.";
      case "Tiago Reis":
        return "I talked to Tiago for some help, but pixels are not his thing.";
      default:
        return;
    }
  };

  return (
    <StoryText
      hashtag={`#september${gameDetails.startingYear + 5}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      <p>
        I'm finishing my main project in Mindera when suddenly {minderSelected}{" "}
        spilt water on the server! No major damages but I lost a week's worth of{" "}
        work and I only have 7 days to delivery the project, so I need all the{" "}
        help I can get. Also, the client made a special request but I really{" "}
        didn't understand him...
      </p>
      {minderaFiveSep.hasAskedQuestion === undefined && (
        <GameQuestion
          question="What should I do?"
          op1="Ask Irina because she is the PO"
          op2="I think I've got everything I need"
          onClickOp1={() => setOption("question", true)
          }
          onClickOp2={() => setOption("question", false)
          }
        />
      )}
      {minderaFiveSep.hasAskedQuestion && (
        <p>I asked Irina for some explanation about the request.</p>
      )}
      {minderaFiveSep.hasAskedQuestion === false && (
        <p>YOLO! I don't care if I have to remake the request.</p>
      )}

      {minderaFiveSep.hasAskedQuestion !== undefined && (
        <>
          <p>
            I'm having a problem with my unit tests...{" "}
            {minderaFiveSep.helpTests && (
              <span>So I asked {minderaFiveSep.helpTests} for help.</span>
            )}
          </p>
          {minderaFiveSep.helpTests && (
            <p>{getHelpText(minderaFiveSep.helpTests)}</p>
          )}

          {!minderaFiveSep.helpTests && (
            <GameQuestion
              question="Who can help me?"
              op1="Ask my mom..."
              op2="Ask Mehul Irá"
              op3="Ask Pedro Teixeira"
              op4="Ask Vitor Mineiro"
              onClickOp1={() => setOption("tests", "my mom")
              }
              onClickOp2={() => setOption("tests", "Mehul Irá")}
              onClickOp3={() => setOption("tests", "Pedro Teixeira")}
              onClickOp4={() => setOption("tests", "Vitor Mineiro")}
            />
          )}
        </>
      )}

      {minderaFiveSep.helpTests && (
        <>
          <p>
            After a SEO test, I realized that the project's performance was
            pretty bad... I think I have to optimize the image files.
          </p>
          {minderaFiveSep.helpSeo && (
            <p>{getHelpText(minderaFiveSep.helpSeo)}</p>
          )}

          {!minderaFiveSep.helpSeo && (
            <GameQuestion
              question="Who can help me?"
              op1="Diogo Ferreira"
              op2="Caldas"
              op3="Tiago Reis"
              onClickOp1={() => setOption("seoPerformance", "Diogo Ferreira")}
              onClickOp2={() => setOption("seoPerformance", "Caldas")}
              onClickOp3={() => setOption("seoPerformance", "Tiago Reis")}
            />
          )}
        </>
      )}

      {minderaFiveSep.helpSeo && !minderaFiveSep.isFinished && (
        <NextButton
          action={() => {
            updateBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaFiveSep: state.game.gameInfo.timestamps.minderaFiveSep
  };
};

const mapDispatchToProps = dispatch => ({
  updateBox: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaFiveSep: {
          ...timestamps.minderaFiveSep,
          isFinished: true
        }
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FifthMinderaSeptember);
