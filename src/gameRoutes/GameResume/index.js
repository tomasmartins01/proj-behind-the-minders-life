import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { connect } from "react-redux";

import InterviewChoices from "./InterviewChoices";

import "react-tabs/style/react-tabs.css";
import SchoolChoices from "./SchoolChoices";

const GameResume = ({ formDetails, gameDetails, timestamps }) => {
  const isSchoolDisabled =
    !timestamps.schoolSep.isFinished &&
    !timestamps.schoolDec.isFinished &&
    !timestamps.schoolMar.isFinished &&
    !timestamps.schoolJun.isFinished;

  const isMindera1Disabled =
    !timestamps.minderaOneSep.isFinished &&
    !timestamps.minderaOneDec.isFinished &&
    !timestamps.minderaOneMar.isFinished &&
    !timestamps.minderaOneJun.isFinished;

  const isMindera2Disabled =
    !timestamps.minderaTwoSep.isFinished &&
    !timestamps.minderaTwoDec.isFinished &&
    !timestamps.minderaTwoMar.isFinished &&
    !timestamps.minderaTwoJun.isFinished;

  const isMindera3Disabled =
    !timestamps.minderaThreeSep.isFinished &&
    !timestamps.minderaThreeDec.isFinished &&
    !timestamps.minderaThreeMar.isFinished &&
    !timestamps.minderaThreeJun.isFinished;

  const isMindera4Disabled =
    !timestamps.minderaFourSep.isFinished &&
    !timestamps.minderaFourDec.isFinished &&
    !timestamps.minderaFourMar.isFinished &&
    !timestamps.minderaFourJun.isFinished;

  const isMindera5Disabled =
    !timestamps.minderaFiveSep.isFinished &&
    !timestamps.minderaFiveDec.isFinished &&
    !timestamps.minderaFiveMar.isFinished &&
    !timestamps.minderaFiveJun.isFinished;

  const panelStyle = {
    width: "90%",
    border: "2px solid black",
    margin: "10px",
    padding: "10px",
    textAlign: "justify"
  };

  return (
    <div className="endGame">
      <section>
        <h3>{formDetails.fullName}'s life choices</h3>
      </section>

      <Tabs>
        <TabList>
          <Tab>Status</Tab>
          <Tab>Interview</Tab>
          <Tab disabled={isSchoolDisabled}>School Year</Tab>
          <Tab disabled={isMindera1Disabled}>Mindera First Year</Tab>
          <Tab disabled={isMindera2Disabled}>Mindera Second Year</Tab>
          <Tab disabled={isMindera3Disabled}>Mindera Third Year</Tab>
          <Tab disabled={isMindera4Disabled}>Mindera Fourth Year</Tab>
          <Tab disabled={isMindera5Disabled}>Mindera Fifth Year</Tab>
        </TabList>

        <TabPanel>
          <h3>Status</h3>
        </TabPanel>

        <TabPanel style={panelStyle}>
          <InterviewChoices timestamps={timestamps} gameDetails={gameDetails} />
        </TabPanel>

        <TabPanel style={panelStyle}>
          <SchoolChoices timestamps={timestamps} gameDetails={gameDetails} />
        </TabPanel>

        <TabPanel>
          <h3>Mindera First Year</h3>
        </TabPanel>

        <TabPanel>
          <h3>Mindera Second Year</h3>
        </TabPanel>

        <TabPanel>
          <h3>Mindera Third Year</h3>
        </TabPanel>

        <TabPanel>
          <h3>Mindera Fourth Year</h3>
        </TabPanel>

        <TabPanel>
          <h3>Mindera Fifth Year</h3>
        </TabPanel>
      </Tabs>
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

export default connect(mapStateToProps)(GameResume);
