import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "~/features/landing";
import PersonaRouter from "~/features/persona/routes";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/persona" component={PersonaRouter} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
