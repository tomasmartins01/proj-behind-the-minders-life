import React from "react";
import { connect } from "react-redux";

// Routes
import InterviewJune from "./InterviewJune";
import SchoolSeptember from "./SchoolSeptember";
import SchoolDecember from "./SchoolDecember";

const GameRoutes = ({ timestamps }) => {
  return (
    <>
      {/* School */}
      <InterviewJune />
      {timestamps.interviewJune.isFinished && <SchoolSeptember />}
      {timestamps.schoolSep.isFinished && <SchoolDecember />}
      {timestamps.schoolDec.isFinished && <p>School March</p>}
      {timestamps.schoolMar.isFinished && <p>School June</p>}

      {/* Mindera 1 */}
      {timestamps.schoolJun.isFinished && <p>Mindera 1 September</p>}
      {timestamps.minderaOneSep.isFinished && <p>Mindera 1 December</p>}
      {timestamps.minderaOneDec.isFinished && <p>Mindera 1 March</p>}
      {timestamps.minderaOneMar.isFinished && <p>Mindera 1 June</p>}

      {/* Mindera 2 */}
      {timestamps.minderaOneJun.isFinished && <p>Mindera 2 September</p>}
      {timestamps.minderaTwoSep.isFinished && <p>Mindera 2 December</p>}
      {timestamps.minderaTwoDec.isFinished && <p>Mindera 2 March</p>}
      {timestamps.minderaTwoMar.isFinished && <p>Mindera 2 June</p>}

      {/* Mindera 3 */}
      {timestamps.minderaTwoJun.isFinished && <p>Mindera 3 September</p>}
      {timestamps.minderaThreeSep.isFinished && <p>Mindera 3 December</p>}
      {timestamps.minderaThreeDec.isFinished && <p>Mindera 3 March</p>}
      {timestamps.minderaThreeMar.isFinished && <p>Mindera 3 June</p>}

      {/* Mindera 4 */}
      {timestamps.minderaThreeJun.isFinished && <p>Mindera 4 September</p>}
      {timestamps.minderaFourSep.isFinished && <p>Mindera 4 December</p>}
      {timestamps.minderaFourDec.isFinished && <p>Mindera 4 March</p>}
      {timestamps.minderaFourMar.isFinished && <p>Mindera 4 June</p>}

      {/* Mindera 5 */}
      {timestamps.minderaFourJun.isFinished && <p>Mindera 5 September</p>}
      {timestamps.minderaFiveSep.isFinished && <p>Mindera 5 December</p>}
      {timestamps.minderaFiveDec.isFinished && <p>Mindera 5 March</p>}
      {timestamps.minderaFiveMar.isFinished && <p>Mindera 5 June</p>}
    </>
  );
};

const mapStateToProps = state => {
  return {
    timestamps: state.game.gameInfo.timestamps
  };
};

export default connect(mapStateToProps)(GameRoutes);
