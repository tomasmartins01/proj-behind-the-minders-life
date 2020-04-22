import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Index from "./pages/Index";
import PlayGame from "./pages/PlayGame";
import TheMinders from "./pages/TheMinders";

import "./styles/reset.less";

const App = () => {
  console.log("app")
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/game" component={PlayGame} />
        <Route exact path="/minders" component={TheMinders} />
      </Switch>
    </Router>
  );
};

export default App;
