import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "../../styles/game-styles/progressBars.less";

const ProgressBars = ({ skills, carrer }) => {
  return (
    <section className="progressBars">
      <Tabs>
        <TabList>
          <Tab>General Skills</Tab>
          <Tab>Backend Skills</Tab>
          <Tab>FrontEnd Skills</Tab>
          <Tab>Mobile Skills</Tab>
        </TabList>

        <TabPanel>
          <article>
            <h3>Social Skills</h3>
            <div
              className={`bar ${
                skills.socialSkills <= 15
                  ? "badStatus"
                  : skills.socialSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="socialSkills"
            >
              {skills.socialSkills}%
            </div>
          </article>
          <article>
            <h3>Programming Skills</h3>
            <div
              className={`bar ${
                skills.programmingSkills <= 15
                  ? "badStatus"
                  : skills.programmingSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="programmingSkills"
            >
              {skills.programmingSkills}%
            </div>
          </article>
        </TabPanel>

        <TabPanel>
          <article>
            <h3>Java</h3>
            <div
              className={`bar ${
                skills.backend.javaSkills <= 15
                  ? "badStatus"
                  : skills.backend.javaSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="javaSkills"
            >
              {skills.backend.javaSkills}%
            </div>
          </article>

          {carrer === "backend" && (
            <>
              <article>
                <h3>Ruby</h3>
                <div
                  className={`bar ${
                    skills.backend.rubySkills <= 15
                      ? "badStatus"
                      : skills.backend.rubySkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                  id="rubySkills"
                >
                  {skills.backend.rubySkills}%
                </div>
              </article>

              <article>
                <h3>Ruby</h3>
                <div
                  className={`bar ${
                    skills.backend.pythonSkills <= 15
                      ? "badStatus"
                      : skills.backend.pythonSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                  id="pythonSkills"
                >
                  {skills.backend.pythonSkills}%
                </div>
              </article>

              <article>
                <h3>Golang</h3>
                <div
                  className={`bar ${
                    skills.backend.golangSkills <= 15
                      ? "badStatus"
                      : skills.backend.golangSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                  id="golangSkills"
                >
                  {skills.backend.golangSkills}%
                </div>
              </article>
            </>
          )}

          <article>
            <h3>SQL</h3>
            <div
              className={`bar ${
                skills.backend.sqlSkills <= 15
                  ? "badStatus"
                  : skills.backend.sqlSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="sqlSkills"
            >
              {skills.backend.sqlSkills}%
            </div>
          </article>
        </TabPanel>
        <TabPanel>
          <article>
            <h3>HTML</h3>
            <div
              className={`bar ${
                skills.frontend.htmlSkills <= 15
                  ? "badStatus"
                  : skills.frontend.htmlSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="htmlSkills"
            >
              {skills.frontend.htmlSkills}%
            </div>
          </article>
          <article>
            <h3>CSS</h3>
            <div
              className={`bar ${
                skills.frontend.cssSkills <= 15
                  ? "badStatus"
                  : skills.frontend.cssSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="cssSkills"
            >
              {skills.frontend.cssSkills}%
            </div>
          </article>
          <article>
            <h3>Javascript</h3>
            <div
              className={`bar ${
                skills.frontend.jsSkills <= 15
                  ? "badStatus"
                  : skills.frontend.jsSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="jsSkills"
            >
              {skills.frontend.jsSkills}%
            </div>
          </article>
          {carrer === "frontend" && (
            <article>
              <h3>ReactJS</h3>
              <div
                className={`bar ${
                  skills.frontend.reactjsSkills <= 15
                    ? "badStatus"
                    : skills.frontend.reactjsSkills <= 50
                    ? "mediumStatus"
                    : "goodStatus"
                }`}
                id="reactjsSkills"
              >
                {skills.frontend.reactjsSkills}%
              </div>
            </article>
          )}
        </TabPanel>

        <TabPanel>
          <article>
            <h3>Kotlin</h3>
            <div
              className={`bar ${
                skills.mobile.kotlinSkills <= 15
                  ? "badStatus"
                  : skills.mobile.kotlinSkills <= 50
                  ? "mediumStatus"
                  : "goodStatus"
              }`}
              id="kotlinSkills"
            >
              {skills.mobile.kotlinSkills}%
            </div>
          </article>

          {carrer === "mobile" && (
            <>
              <article>
                <h3>Swift</h3>
                <div
                  className={`bar ${
                    skills.mobile.swiftSkills <= 15
                      ? "badStatus"
                      : skills.mobile.swiftSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                  id="swiftSkills"
                >
                  {skills.mobile.swiftSkills}%
                </div>
              </article>
              <article>
                <h3>React Native</h3>
                <div
                  className={`bar ${
                    skills.mobile.reactNativeSkills <= 15
                      ? "badStatus"
                      : skills.mobile.reactNativeSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                  id="reactNativeSkills"
                >
                  {skills.mobile.reactNativeSkills}%
                </div>
              </article>
            </>
          )}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ProgressBars;
