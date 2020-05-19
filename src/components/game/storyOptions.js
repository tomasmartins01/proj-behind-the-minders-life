import React from "react";

const StoryOptions = ({ children, op1, op2, op3 }) => {
  return (
    <div>
      <p>{children}</p>
      <div>
        <button>{op1}</button>
        <button>{op2}</button>
        <button>{op3}</button>
      </div>
    </div>
  );
};
