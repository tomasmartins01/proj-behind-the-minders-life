import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "../../styles/game-styles/progressBars.less";

const ProgressBars = ({ skills, specialization, prevExperience }) => {
  return (
    <section className="progressBars">
      <Tabs>
        <TabList>
          <Tab>General Skills</Tab>
          <Tab>Backend Skills</Tab>
          <Tab>Frontend Skills</Tab>
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
          {(prevExperience === "C++" || specialization === "Backend") && (
            <>
              <article>
                <h3>C++</h3>
                <div
                  className={`bar ${
                    skills.backend.cplusplusSkills <= 15
                      ? "badStatus"
                      : skills.backend.cplusplusSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                >
                  {skills.backend.cplusplusSkills}%
                </div>
              </article>
            </>
          )}
          {specialization === "Backend" && (
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
              >
                {skills.backend.golangSkills}%
              </div>
            </article>
          )}

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
            >
              {skills.backend.javaSkills}%
            </div>
          </article>

          {(prevExperience === "PHP" || specialization === "Backend") && (
            <article>
              <h3>PHP</h3>
              <div
                className={`bar ${
                  skills.backend.phpSkills <= 15
                    ? "badStatus"
                    : skills.backend.phpSkills <= 50
                    ? "mediumStatus"
                    : "goodStatus"
                }`}
              >
                {skills.backend.phpSkills}%
              </div>
            </article>
          )}

          {(prevExperience === "Python" || specialization === "Backend") && (
            <article>
              <h3>Python</h3>
              <div
                className={`bar ${
                  skills.backend.pythonSkills <= 15
                    ? "badStatus"
                    : skills.backend.pythonSkills <= 50
                    ? "mediumStatus"
                    : "goodStatus"
                }`}
              >
                {skills.backend.pythonSkills}%
              </div>
            </article>
          )}

          {specialization === "Backend" && (
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
                >
                  {skills.backend.rubySkills}%
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
          {specialization === "Frontend" && (
            <>
              <article>
                <h3>AngularJS</h3>
                <div
                  className={`bar ${
                    skills.frontend.angularSkills <= 15
                      ? "badStatus"
                      : skills.frontend.angularSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                >
                  {skills.frontend.angularSkills}%
                </div>
              </article>
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
                >
                  {skills.frontend.reactjsSkills}%
                </div>
              </article>
              <article>
                <h3>VueJS</h3>
                <div
                  className={`bar ${
                    skills.frontend.vueSkills <= 15
                      ? "badStatus"
                      : skills.frontend.vueSkills <= 50
                      ? "mediumStatus"
                      : "goodStatus"
                  }`}
                >
                  {skills.frontend.vueSkills}%
                </div>
              </article>
            </>
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
            >
              {skills.mobile.kotlinSkills}%
            </div>
          </article>

          {specialization === "Mobile" && (
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
