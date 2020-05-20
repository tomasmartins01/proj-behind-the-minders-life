import React from "react";

import "../../styles/game-styles/gameText.less";

const StoryText = ({ children, hashtag }) => {
  return (
    <section className="storyTime">
      <article>{children}</article>
      <article>{hashtag}</article>
    </section>
  );
};

export default StoryText;