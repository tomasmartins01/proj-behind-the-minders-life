import React from "react";

const ErrorPage = ({ handleClick }) => {
  return (
    <div id="errorPage">
      <div id="message">
        <h1 id="message404">404 </h1>
        <h2 id="message404">EMAIL NOT FOUND</h2>
        <button onClick={handleClick}>try another email</button>
      </div>
    </div>
  );
};

export default ErrorPage;
