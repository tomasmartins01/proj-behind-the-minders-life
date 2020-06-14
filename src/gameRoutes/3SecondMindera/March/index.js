import React, { useState } from "react";
import { connect } from "react-redux";

import StoryText from "../../../components/game/StoryText";
import GameQuestion from "../../../components/game/GameQuestion";

import {
  updateTimeBoxAction,
  updateBankBalanceAction,
  updateSkillsAction,
  endGameAction
} from "../../../redux/game/actions";

import { NextButton, EndButton } from "../../../components/game/GameButtons";
import getParts from "./computerLogic";

const SecondMinderaMarch = ({
  gameDetails,
  minderaTwoMar,
  pcInformation,
  setOption,
  updateBalance,
  updateSkills,
  goToNext,
  endGame
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const onButtonClick = () => setIsOpen(!isOpen);

  const [pcValue, setPcValue] = useState(0);
  const checkPcValue = pcValue < 325 || pcValue > gameDetails.bankBalance;

  const pcbroke = op => {
    setOption({
      ...gameDetails.timestamps,
      minderaTwoMar: {
        ...gameDetails.timestamps.minderaTwoMar,
        pcbrokeToDo: op
      }
    });
  };

  const setPcInfo = pcValue => {
    setOption({
      ...gameDetails.timestamps,
      minderaTwoMar: {
        ...gameDetails.timestamps.minderaTwoMar,
        pcInformation: getParts(pcValue)
      }
    });
    updateBalance(gameDetails.bankBalance - getParts(pcValue).total);
  };

  const updateSkillsLevel = esp => {
    switch (esp) {
      case "Frontend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          frontend: {
            ...gameDetails.skillsLevel.frontend,
            htmlSkills: 100,
            cssSkills: 100,
            jsSkills: 100
          }
        });
        break;
      case "Backend":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          backend: {
            ...gameDetails.skillsLevel.backend,
            javaSkills: 100,
            sqlSkills: 100
          }
        });
        break;
      case "Mobile":
        updateSkills({
          ...gameDetails.skillsLevel,
          socialSkills: 100,
          mobile: {
            ...gameDetails.skillsLevel.mobile,
            kotlinSkills: 100
          }
        });
        break;
    }
  };

  return (
    <StoryText
      hashtag={`#march${gameDetails.startingYear + 3}`}
      isOpen={isOpen}
      onButtonClick={onButtonClick}
    >
      {!minderaTwoMar.pcbrokeToDo && (
        <GameQuestion
          question="You were using your computer at home when suddenly you trip over and... OH NO... your computer is smashed to bits on the floor... :( "
          op1="Cry and do nothing about it"
          op2="Ask Caldas for a new computer"
          op3="Build your own computer with PC Budget!"
          onClickOp1={() => pcbroke("Do nothing")}
          onClickOp2={() => pcbroke("Ask Caldas for a new one")}
          onClickOp3={() => pcbroke("Build your own computer")}
        />
      )}

      {minderaTwoMar.pcbrokeToDo === "Do nothing" && (
        <>
          <p>It's ok, it's just a computer haha.</p>
          <p>I lost myy
       job because I don't have any means to work...</p>
        </>
      )}

      {minderaTwoMar.pcbrokeToDo === "Ask Caldas for a new one" && (
        <p>
          Damn it... Unfortenately Mindera doesn't have any replacement
          computers right now, but he recomended a website where you build your
          own computer!
        </p>
      )}

      {minderaTwoMar.pcbrokeToDo === "Build your own computer" && (
        <p>
          I've heard about this website where you can build your own computer...
          I think it was PC Budget!
        </p>
      )}

      {minderaTwoMar.pcbrokeToDo && minderaTwoMar.pcbrokeToDo === "Do nothing" && (
        <EndButton
          action={() => {
            goToNext(gameDetails.timestamps);
            endGame();
          }}
        />
      )}

      {minderaTwoMar.pcbrokeToDo &&
        minderaTwoMar.pcbrokeToDo !== "Do nothing" &&
        !pcInformation && (
          <div className="gameQuestion">
            <p>How much will I spent on the computer?</p>
            <input
              type="number"
              min="325"
              max={gameDetails.bankBalance}
              value={pcValue}
              onChange={e => setPcValue(e.target.value)}
            />
            <button disabled={checkPcValue} onClick={() => setPcInfo(pcValue)}>
              I'm ready to build a computer!
            </button>
          </div>
        )}

      {pcInformation && (
        <div>
          {pcInformation.amount > pcInformation.total ? (
            <p>
              I was able to spend {pcInformation.total} euros of{" "}
              {pcInformation.amount} euros for my new computer.
            </p>
          ) : (
            <p>I spent {pcInformation.amount} euros for my new computer.</p>
          )}
          <p>The computer was built with these pieces:</p>
          <ul>
            <li>
              CPU: {pcInformation.options.cpuSelected.manufacturer}{" "}
              {pcInformation.options.cpuSelected.family}{" "}
              {pcInformation.options.cpuSelected.model} for{" "}
              {pcInformation.options.cpuSelected.price} euros;
            </li>
            <li>
              GPU: {pcInformation.options.gpuSelected.manufacturer}{" "}
              {pcInformation.options.gpuSelected.model} for{" "}
              {pcInformation.options.gpuSelected.price} euros;
            </li>
            <li>
              Motherboard: {pcInformation.options.motherboardSelected.format}{" "}
              {pcInformation.options.motherboardSelected.manufacturer}{" "}
              {pcInformation.options.motherboardSelected.model} for{" "}
              {pcInformation.options.motherboardSelected.price} euros;
            </li>
            <li>
              RAM: {pcInformation.options.ramSelected.manufacturer}{" "}
              {pcInformation.options.ramSelected.model}{" "}
              {pcInformation.options.ramSelected.speed}{" "}
              {pcInformation.options.ramSelected.size} for{" "}
              {pcInformation.options.ramSelected.price} euros;
            </li>
            <li>
              Storage: {pcInformation.options.storageSelected.manufacturer}{" "}
              {pcInformation.options.storageSelected.type}{" "}
              {pcInformation.options.storageSelected.model}{" "}
              {pcInformation.options.storageSelected.size} for{" "}
              {pcInformation.options.storageSelected.price} euros;
            </li>
            <li>
              Case: {pcInformation.options.caseSelected.manufacturer}{" "}
              {pcInformation.options.caseSelected.model}{" "}
              {pcInformation.options.caseSelected.type} for{" "}
              {pcInformation.options.caseSelected.price} euros.
            </li>
          </ul>
        </div>
      )}

      {minderaTwoMar.pcbrokeToDo !== "Do nothing" &&
        pcInformation &&
        !minderaTwoMar.isFinished && (
          <NextButton
            action={() => {
              setIsOpen(false);
              updateSkillsLevel(gameDetails.career);
              updateBalance(gameDetails.bankBalance + 600 * 3);
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
    minderaTwoMar: state.game.gameInfo.timestamps.minderaTwoMar,
    pcInformation: state.game.gameInfo.timestamps.minderaTwoMar.pcInformation
  };
};

const mapDispatchToProps = dispatch => ({
  setOption: timestamps => dispatch(updateTimeBoxAction(timestamps)),
  updateBalance: bankBalance => dispatch(updateBankBalanceAction(bankBalance)),
  updateSkills: skillsLevel => dispatch(updateSkillsAction(skillsLevel)),
  goToNext: timestamps =>
    dispatch(
      updateTimeBoxAction({
        ...timestamps,
        minderaTwoMar: {
          ...timestamps.minderaTwoMar,
          isFinished: true
        }
      })
    ),
  endGame: () => dispatch(endGameAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(SecondMinderaMarch);
