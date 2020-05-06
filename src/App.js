import React from "react";
import { hot } from "react-hot-loader";

import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default hot(module)(App);
