import React from "react";

import Image from "../Image";

const ErrorPage = ({ image, handleClick }) => {
  return (
    <div id="errorPage">
      <Image imageSrc={image} alt="Email not found" cName="room404img" />
      <div id="message">
        <h1 id="message404">404: EMAIL NOT FOUND</h1>
        <button onClick={handleClick}>try another email</button>
      </div>
    </div>
  );
};

export default ErrorPage;
