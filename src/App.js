import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";

import Index from "./pages/Index";
import PlayGame from "./pages/PlayGame";
import Game from "./pages/Game";
import TheMinders from "./pages/TheMinders";

import "./styles/reset.less";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/create">
          <PlayGame />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
        <Route exact path="/minders">
          {" "}
          <TheMinders />
        </Route>
      </Switch>
    </Router>
  );
};

export default hot(module)(App);
