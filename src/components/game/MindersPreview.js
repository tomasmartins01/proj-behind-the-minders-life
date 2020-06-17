import React, { useState } from "react";
import ReactPlayer from "react-player";

import mindersList from "../../helpers/mindersList";

const MindersPreview = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleClickMinder = minder => setVideoUrl(minder.youtubeVideo);

  const getOrder = (a, b) => {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  };

  return (
    <div className="mindersPreview">
      <ul type="none">
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
          width="300px"
          height="200px"
          className="gamePreview"
        />
      ) : null}
    </div>
  );
};

export default MindersPreview;
