import React from "react";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";

import RandomPic from "../images/minders/pic.png";
import mindersList from "../helpers/mindersList";

import "../styles/minders-styles/main.less";
import MinderButton from "../components/minders/MinderButton";

const TheMinders = () => {
  document.title = "The Minders";

  return (
    <div className="TheMinders">
      <Header />
      <h1 className="title">The Minders</h1>
      <div className="mindersContainer">
        {mindersList.map((minder, index) => (
          <MinderButton key={index}
            urlMinder={`/${minder.urlName}`}
            nameMinder={minder.name}
            picMinder={RandomPic}
            jobMinder={minder.job}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TheMinders;
