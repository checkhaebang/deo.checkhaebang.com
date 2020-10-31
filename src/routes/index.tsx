import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "~/features/landing";
import PersonaRouter from "~/features/persona/routes";
import ChecklistRouter from "~/features/checklist/routes";
import LoginRouter from "~/features/login/routes";
import RoomRouter from "~/features/rooms/routes";
const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" component={LoginRouter} />
      <Route path="/persona" component={PersonaRouter} />
      <Route path="/checklist" component={ChecklistRouter} />
      <Route path="/rooms" component={RoomRouter} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
