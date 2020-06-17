import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "../../styles/game-styles/progressBars.less";

const Bar = ({ tag, skill }) => {
  return (
    <article>
      <h3>{tag}</h3>
      <div
        className={`bar ${
          skill <= 15
            ? "badStatus"
            : skill <= 50
            ? "mediumStatus"
            : "goodStatus"
        }`}
      >
        {skill}%
      </div>
    </article>
  );
};

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
          <Bar tag="Social Skills" skill={skills.socialSkills} />
        </TabPanel>

        <TabPanel>
          {(prevExperience === "C++" || specialization === "Backend") && (
            <Bar tag="C++" skill={skills.backend.cplusplusSkills} />
          )}
          {specialization === "Backend" && (
            <Bar tag="Golang" skill={skills.backend.golangSkills} />
          )}
          <Bar tag="Java" skill={skills.backend.javaSkills} />

          {(prevExperience === "PHP" || specialization === "Backend") && (
            <Bar tag="PHP" skill={skills.backend.phpSkills} />
          )}

          {(prevExperience === "Python" || specialization === "Backend") && (
            <Bar tag="Python" skill={skills.backend.pythonSkills} />
          )}

          {specialization === "Backend" && (
            <Bar tag="Ruby" skill={skills.backend.rubySkills} />
          )}
          <Bar tag="SQL" skill={skills.backend.sqlSkills} />
        </TabPanel>

        <TabPanel>
          {specialization === "Frontend" && (
            <Bar tag="AngularJS" skill={skills.frontend.angularSkills} />
          )}
          <Bar tag="HTML" skill={skills.frontend.htmlSkills} />
          <Bar tag="CSS" skill={skills.frontend.cssSkills} />
          <Bar tag="Javascript" skill={skills.frontend.jsSkills} />

          {specialization === "Frontend" && (
            <>
              <Bar tag="ReactJS" skill={skills.frontend.reactjsSkills} />
              <Bar tag="VueJS" skill={skills.frontend.vueSkills} />
            </>
          )}
        </TabPanel>

        <TabPanel>
          {specialization === "Mobile" && (
            <>
              <Bar tag="Dart" skill={skills.mobile.dartSkills} />
              <Bar tag="Flutter" skill={skills.mobile.flutterSkills} />
            </>
          )}
          <Bar tag="Kotlin" skill={skills.mobile.kotlinSkills} />
          {specialization === "Mobile" && (
            <>
              <Bar tag="Swift" skill={skills.mobile.swiftSkills} />
              <Bar tag="React Native" skill={skills.mobile.reactNativeSkills} />
            </>
          )}
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ProgressBars;
