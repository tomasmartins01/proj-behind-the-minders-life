import React from "react";

import "../../styles/game-styles/progressBars.less";

const progress = 0;

const ProgressBars = ({
  socialSkills,
  programmingSkills,
  javaSkills,
  sqlSkills,
  htmlSkills,
  cssSkills,
  jsSkills,
  reactjsSkills
}) => {
  return (
    <section className="progressBars">
      <h2>General Skills</h2>
      <article>
        <h3>Social Skills</h3>
        <div
          className={`bar ${
            socialSkills <= 15
              ? "badStatus"
              : socialSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="socialSkills"
        >
          {socialSkills}%
        </div>
      </article>

      <article>
        <h3>Programming Skills</h3>
        <div
          className={`bar ${
            programmingSkills <= 15
              ? "badStatus"
              : programmingSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="programmingSkills"
        >
          {programmingSkills}%
        </div>
      </article>

      <h2>Programming Language Level</h2>
      <article>
        <h3>Java</h3>
        <div
          className={`bar ${
            javaSkills <= 15
              ? "badStatus"
              : javaSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="javaSkills"
        >
          {javaSkills}%
        </div>
      </article>
      <article>
        <h3>SQL</h3>
        <div
          className={`bar ${
            sqlSkills <= 15
              ? "badStatus"
              : sqlSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="sqlSkills"
        >
          {sqlSkills}%
        </div>
      </article>
      <article>
        <h3>HTML</h3>
        <div
          className={`bar ${
            htmlSkills <= 15
              ? "badStatus"
              : htmlSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="htmlSkills"
        >
          {htmlSkills}%
        </div>
      </article>
      <article>
        <h3>CSS</h3>
        <div
          className={`bar ${
            cssSkills <= 15
              ? "badStatus"
              : cssSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="cssSkills"
        >
          {cssSkills}%
        </div>
      </article>
      <article>
        <h3>Javascript</h3>
        <div
          className={`bar ${
            jsSkills <= 15
              ? "badStatus"
              : jsSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="jsSkills"
        >
          {jsSkills}%
        </div>
      </article>
      <article>
        <h3>ReactJS</h3>
        <div
          className={`bar ${
            reactjsSkills <= 15
              ? "badStatus"
              : reactjsSkills <= 50
              ? "mediumStatus"
              : "goodStatus"
          }`}
          id="reactjsSkills"
        >
          {reactjsSkills}%
        </div>
      </article>
    </section>
  );
};

export default ProgressBars;
