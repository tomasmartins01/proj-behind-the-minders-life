import React from "react";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import mindersList from "../helpers/mindersList";
import MinderButton from "../components/minders/MinderButton";
import getMinderProfilePic from "../helpers/minderAvatar";

import "../styles/minders-styles/main.less";

const TheMinders = () => {
  document.title = "The Minders";

  return (
    <div className="TheMinders">
      <Header />
      <h1 className="title">The Minders</h1>
      <div className="mindersContainer">
        {mindersList.map((minder, index) => (
          <MinderButton
            key={index}
            urlMinder={`/${minder.urlName}`}
            nameMinder={minder.name}
            picMinder={getMinderProfilePic(minder.name)}
            jobMinder={minder.job}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TheMinders;
