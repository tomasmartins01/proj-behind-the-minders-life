import React, {useState} from "react";

import "../../styles/game-styles/gameText.less";

const StoryText = ({ children, hashtag }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => setIsOpen(!isOpen);

  return (
    <section className="storyPart">
      <article className={`${isOpen ? "open" : "closed"}`}>{children}</article>
      <article>
        <p>{hashtag}</p>
        <button onClick={onButtonClick}>{isOpen ? "-": "+"}</button>
      </article>
    </section>
  );
};

export default StoryText;
