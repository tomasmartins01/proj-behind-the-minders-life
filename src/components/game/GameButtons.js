import React from "react";

export const NextButton = ({ action }) => {
  return <button onClick={action}>NEXT</button>;
};

export const EndButton = ({ action }) => {
  return <button onClick={action}>END</button>;
};
