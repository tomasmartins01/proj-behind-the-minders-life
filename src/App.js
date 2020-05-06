import React, { useState } from "react";
import { hot } from "react-hot-loader";

import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes";

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  return (
    <Provider store={store}>
      <div className={`page-container ${nightMode ? "night-mode" : "day-mode"}`}>
        <Routes isNightMode={nightMode} />
        <button className="changeMode" onClick={() => setNightMode(!nightMode)}>
          Change Mode
        </button>
      </div>
    </Provider>
  );
};

export default hot(module)(App);
