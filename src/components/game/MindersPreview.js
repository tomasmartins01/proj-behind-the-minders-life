import React, { useState } from "react";
import ReactPlayer from "react-player";

import mindersList from "../../helpers/mindersList";

const MindersPreview = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleClickMinder = minder => {
    setVideoUrl(minder.youtubeVideo);
  };

  const getOrder = (a, b) => {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  };

  return (
    <>
      <ul type="square">
        {mindersList
          .sort((a, b) => getOrder(a.name, b.name))
          .map((minder, index) => (
            <li key={index} onClick={() => handleClickMinder(minder)}>
              {minder.name}
            </li>
          ))}
      </ul>

      {videoUrl ? (
        <ReactPlayer
          controls
          url={videoUrl}
          width="250px"
          height="300px"
          className="gamePreview"
        />
      ) : null}
    </>
  );
};

export default MindersPreview;
