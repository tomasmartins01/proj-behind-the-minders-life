import React, { useState } from "react";
import { connect } from "react-redux";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Profile from "../components/game/Profile";
import ProgressBars from "../components/game/ProgressBars";
import MindersPreview from "../components/game/MindersPreview";

import StoryText from "../components/game/StoryText";
import StoryOptions from "../components/game/StoryOptions";

import "../styles/game-styles/gamePage.less";
import "../styles/game-styles/gameArticle.less";

const Game = ({ formDetails }) => {
  document.title = "Game";
  const [dropdownValue, setDropdownValue] = useState("");

  const skillsLevel = {
    socialSkills: 0,
    programmingSkills: 0,
    backend: {
      javaSkills: 0,
      rubySkills: 0,
      pythonSkills: 0,
      golangSkills: 0,
      sqlSkills: 0
    },
    frontend: {
      htmlSkills: 0,
      cssSkills: 0,
      jsSkills: 0,
      reactjsSkills: 0
    },
    mobile: {
      kotlinSkills: 0,
      swiftSkills: 0,
      reactNativeSkills: 0
    }
  };

  const [skills, setSkills] = useState(skillsLevel);
  const [carrer, setCarrer] = useState("");
  const [happiness, setHappiness] = useState(70);

  return (
    <>
      <Header />
      <main className="gameParts">
        <div className="game">
          <StoryText hashtag="#september2019">
            <p>You started Mindera School</p>
            <StoryOptions op1="be cool" op2="be nice" op3="go fuck yourselves">
              How would you react?
              </StoryOptions>
          </StoryText>
        </div>
        <aside>
          <select
            className="dropdownGame"
            value={dropdownValue}
            onChange={e => setDropdownValue(e.target.value)}
          >
            <option value="none">-----</option>
            <option value="profile">Profile</option>
            <option value="progress">Progress</option>
            <option value="minders">Minders</option>
          </select>
          <div className="valueDisplay">
            {dropdownValue === "profile" && (
              <Profile
                formDetails={formDetails}
                carrer={carrer}
                happiness={happiness}
              />
            )}
            {dropdownValue === "progress" && (
              <ProgressBars skills={skills} carrer={carrer} />
            )}
            {dropdownValue === "minders" && <MindersPreview />}
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return { formDetails: state.form.formDetails };
};

export default connect(mapStateToProps)(Game);
