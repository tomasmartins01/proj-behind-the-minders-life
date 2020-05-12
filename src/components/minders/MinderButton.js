import React from "react";
import { withRouter } from "react-router-dom";

import Image from "../utils/Image";
import Play from "../../images/play.png";

const MinderButton = ({ urlMinder, nameMinder, picMinder, jobMinder, history }) => {
  return (
    <button className="character" onClick={() => history.push(urlMinder)}>
      <p className="textName">{nameMinder}</p>
      <Image imageSrc={picMinder} alt={`${nameMinder} picture`} cName="profilePicture"/>
      <Image imageSrc={Play} alt="play icon" cName="play"/>
      <p className="textJob">{jobMinder}</p>
    </button>
)
};

export default withRouter(MinderButton);
