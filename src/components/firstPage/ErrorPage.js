import React from "react";

const ErrorPage = ({ handleClick }) => {
  return (
    <div id="errorPage">
      <div id="message">
        <h1 id="message404">403 </h1>
        <h2 id="message404">EMAIL FORBIDDEN</h2>
        <button onClick={handleClick}>try another email</button>
      </div>
    </div>
  );
};

export default ErrorPage;
