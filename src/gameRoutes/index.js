import React from "react";
import { connect } from "react-redux";

// Routes
import InterviewJune from "./0InterviewJune";
import SchoolSeptember from "./1School/September";
import SchoolDecember from "./1School/December";
import SchoolMarch from "./1School/March";
import SchoolJune from "./1School/June";

import FirstMinderaSeptember from "./2FirstMindera/September";
import FirstMinderaDecember from "./2FirstMindera/December";
import FirstMinderaMarch from "./2FirstMindera/March";
import FirstMinderaJune from "./2FirstMindera/June";

import SecondMinderaSeptember from "./3SecondMindera/September";
import SecondMinderaDecember from "./3SecondMindera/December";
import SecondMinderaMarch from "./3SecondMindera/March";
import SecondMinderaJune from "./3SecondMindera/June";

import ThirdMinderaSeptember from "./4ThirdMindera/September";
import ThirdMinderaDecember from "./4ThirdMindera/December";
import ThirdMinderaMarch from "./4ThirdMindera/March";
import ThirdMinderaJune from "./4ThirdMindera/June";

import FourthMinderaSeptember from "./5FourthMindera/September";
import FourthMinderaDecember from "./5FourthMindera/December";
import FourthMinderaMarch from "./5FourthMindera/March";
import FourthMinderaJune from "./5FourthMindera/June";

import FifthMinderaSeptember from "./6FifthMindera/September";
import FifthMinderaDecember from "./6FifthMindera/December";
import FifthMinderaMarch from "./6FifthMindera/March";
import FifthMinderaJune from "./6FifthMindera/June";

const GameRoutes = ({ timestamps }) => {
  return (
    <>
      <InterviewJune />
      {timestamps.interviewJune.isFinished && <SchoolSeptember />}
      {timestamps.schoolSep.isFinished && <SchoolDecember />}
      {timestamps.schoolDec.isFinished && <SchoolMarch />}
      {timestamps.schoolMar.isFinished && <SchoolJune />}

      {timestamps.schoolJun.isFinished && <FirstMinderaSeptember />}
      {timestamps.minderaOneSep.isFinished && <FirstMinderaDecember />}
      {timestamps.minderaOneDec.isFinished && <FirstMinderaMarch />}
      {timestamps.minderaOneMar.isFinished && <FirstMinderaJune />}

      {timestamps.minderaOneJun.isFinished && <SecondMinderaSeptember />}
      {timestamps.minderaTwoSep.isFinished && <SecondMinderaDecember />}
      {timestamps.minderaTwoDec.isFinished && <SecondMinderaMarch />}
      {timestamps.minderaTwoMar.isFinished && <SecondMinderaJune />}

      {timestamps.minderaTwoJun.isFinished && <ThirdMinderaSeptember />}
      {timestamps.minderaThreeSep.isFinished && <ThirdMinderaDecember />}
      {timestamps.minderaThreeDec.isFinished && <ThirdMinderaMarch />}
      {timestamps.minderaThreeMar.isFinished && <ThirdMinderaJune />}

      {timestamps.minderaThreeJun.isFinished && <FourthMinderaSeptember />}
      {timestamps.minderaFourSep.isFinished && <FourthMinderaDecember />}
      {timestamps.minderaFourDec.isFinished && <FourthMinderaMarch />}
      {timestamps.minderaFourMar.isFinished && <FourthMinderaJune />}

      {timestamps.minderaFourJun.isFinished && <FifthMinderaSeptember />}
      {timestamps.minderaFiveSep.isFinished && <FifthMinderaDecember />}
      {timestamps.minderaFiveDec.isFinished && <FifthMinderaMarch />}
      {timestamps.minderaFiveMar.isFinished && <FifthMinderaJune />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

export default connect(mapStateToProps)(GameRoutes);
