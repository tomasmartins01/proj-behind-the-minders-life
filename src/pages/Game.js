import React, { useState } from "react";
import { connect } from "react-redux";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Profile from "../components/game/Profile";
import ProgressBars from "../components/game/ProgressBars";
import MindersPreview from "../components/game/MindersPreview";

import "../styles/game-styles/gamePage.less";
import "../styles/game-styles/gameArticle.less";

const Game = ({ formDetails }) => {
  document.title = "Game";
  const [dropdownValue, setDropdownValue] = useState("");

  const [socialSkills, setSocialSkills] = useState(0);
  const [programmingSkills, setProgrammingSkills] = useState(0);
  const [javaSkills, setJavaSkills] = useState(0);
  const [sqlSkills, setSqlSkills] = useState(0);
  const [htmlSkills, setHtmlSkills] = useState(0);
  const [cssSkills, setCssSkills] = useState(0);
  const [jsSkills, setJsSkills] = useState(0);
  const [reactjsSkills, setReactjsSkills] = useState(0);

  const handleSocialClick = () => setSocialSkills(socialSkills + 20);

  return (
    <>
      <Header />
      <main className="gameParts">
        <div className="game">game</div>
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
              <Profile formDetails={formDetails} />
            )}
            {dropdownValue === "progress" && (
              <ProgressBars
                socialSkills={socialSkills}
                programmingSkills={programmingSkills}
                javaSkills={javaSkills}
                sqlSkills={sqlSkills}
                htmlSkills={htmlSkills}
                cssSkills={cssSkills}
                jsSkills={jsSkills}
                reactjsSkills={reactjsSkills}
              />
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
