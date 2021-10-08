import React from "react";
import { Switch, Route } from "react-router-dom";
import Gathering from "../pages/Gathering";
import Graduation from "../pages/Graduation";
import Home from "../pages/Home";
import Wedding from "../pages/Wedding";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/gathering">
        <Gathering />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
    </Switch>
  );
};

export default Routes;
