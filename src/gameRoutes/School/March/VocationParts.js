import React from "react";

import GameQuestion from "../../../components/game/GameQuestion";

export const BackendProject = ({ op1Click, op2Click, op3Click }) => {
  return (
    <GameQuestion
      question="Now is time to choose a project..."
      op1="Build a bill splitter app"
      op2="Build a chess game app"
      op3="Build a music suggestion app"
      onClickOp1={op1Click}
      onClickOp2={op2Click}
      onClickOp3={op3Click}
    />
  );
};

export const BackendLanguage = ({ op1Click, op2Click, op3Click }) => {
  return (
    <GameQuestion
      question="Even though you learned Java, you are considering what language will you choose for your project..."
      op1="Java"
      op2="Golang"
      op3="Python"
      onClickOp1={op1Click}
      onClickOp2={op2Click}
      onClickOp3={op3Click}
    />
  );
};

export const FrontendProject = ({ op1Click, op2Click, op3Click }) => {
  return (
    <GameQuestion
      question="Now is time to choose a project..."
      op1="Build a movie search app"
      op2="Build a chat app"
      op3="Build a platform for bets with friends"
      onClickOp1={op1Click}
      onClickOp2={op2Click}
      onClickOp3={op3Click}
    />
  );
};

export const FrontendLanguage = ({ op1Click, op2Click, op3Click }) => {
  return (
    <GameQuestion
      question="Even though you learned Javascript, you are considering what framework will you choose for your project..."
      op1="Javascript"
      op2="React"
      op3="Angular"
      onClickOp1={op1Click}
      onClickOp2={op2Click}
      onClickOp3={op3Click}
    />
  );
};

export const MobileProject = ({ op1Click, op2Click, op3Click }) => {
  return (
    <GameQuestion
      question="Now is time to choose a project..."
      op1="Build a restaurant reservation app"
      op2="Build a voice translation app"
      op3="Build a cooking recipes app"
      onClickOp1={op1Click}
      onClickOp2={op2Click}
      onClickOp3={op3Click}
    />
  );
};

export const MobileLanguage = ({ op1Click, op2Click, op3Click }) => {
  return (
    <GameQuestion
      question="Even though you learned Kotlin, you are considering what language will you choose for your project..."
      op1="Kotlin"
      op2="Swift"
      op3="React Native"
      onClickOp1={op1Click}
      onClickOp2={op2Click}
      onClickOp3={op3Click}
    />
  );
};