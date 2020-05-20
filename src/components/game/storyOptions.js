import React from "react";

import "../../styles/game-styles/gameButton.less";

const StoryOptions = ({ children, op1, op2, op3 }) => {
  return (
    <div className="storyButton">
      <p>{children}</p>
      <div>
        <button>{op1}</button>
        <button>{op2}</button>
        <button>{op3}</button>
      </div>
    </div>
  );
};

export default StoryOptions;