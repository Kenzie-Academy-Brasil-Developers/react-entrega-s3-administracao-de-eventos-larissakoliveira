import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Casamento from "../pages/Casamento";
import Confraternizacao from "../pages/Confraternizacao";
import Formatura from "../pages/Formatura";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/confraternizacao">
        <Confraternizacao />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
};

export default Routes;
