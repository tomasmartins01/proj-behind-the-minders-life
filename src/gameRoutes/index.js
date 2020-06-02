import React from "react";
import { connect } from "react-redux";

// Routes
import InterviewJune from "./InterviewJune";
import SchoolSeptember from "./School/September";
import SchoolDecember from "./School/December";
import SchoolMarch from "./School/March";
import SchoolJune from "./School/June";

import FirstMinderaSeptember from "./FirstMindera/September";
import FirstMinderaDecember from "./FirstMindera/December";
import FirstMinderaMarch from "./FirstMindera/March";
import FirstMinderaJune from "./FirstMindera/June";

import SecondMinderaSeptember from "./SecondMindera/September";
import SecondMinderaDecember from "./SecondMindera/December";
import SecondMinderaMarch from "./SecondMindera/March";
import SecondMinderaJune from "./SecondMindera/June";

import ThirdMinderaSeptember from "./ThirdMindera/September";
import ThirdMinderaDecember from "./ThirdMindera/December";
import ThirdMinderaMarch from "./ThirdMindera/March";
import ThirdMinderaJune from "./ThirdMindera/June";

import FourthMinderaSeptember from "./FourthMindera/September";
import FourthMinderaDecember from "./FourthMindera/December";
import FourthMinderaMarch from "./FourthMindera/March";
import FourthMinderaJune from "./FourthMindera/June";

import FifthMinderaSeptember from "./FifthMindera/September";
import FifthMinderaDecember from "./FifthMindera/December";
import FifthMinderaMarch from "./FifthMindera/March";
import FifthMinderaJune from "./FifthMindera/June";

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
