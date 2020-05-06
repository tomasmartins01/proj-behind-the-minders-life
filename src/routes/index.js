import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Private from "./Private";
import FirstPage from "../pages/FirstPage";
import PlayGame from "../pages/PlayGame";
import Game from "../pages/Game";
import TheMinders from "../pages/TheMinders";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Private path="/create" component={PlayGame} />
        <Private path="/game" component={Game} />
        <Private path="/minders" component={TheMinders} />
      </Switch>
    </Router>
  );
};

export default Routes;
