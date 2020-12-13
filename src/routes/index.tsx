import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import LandingPage from "~/features/landing";
import PersonaRouter from "~/features/persona/routes";
import ChecklistRouter from "~/features/checklist/routes";
import LoginRouter from "~/features/login/routes";
import RoomRouter from "~/features/rooms/routes";
import NoticeRouter from "~/features/notice/routes";
import withTracker from "~/withTracker.jsx";

const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={withTracker(LandingPage)} />
        <Route path="/login" component={withTracker(LoginRouter)} />
        <Route path="/notice" component={withTracker(NoticeRouter)} />
        <Route path="/persona" component={withTracker(PersonaRouter)} />
        <Route path="/checklist" component={withTracker(ChecklistRouter)} />
        <Route path="/rooms" component={withTracker(RoomRouter)} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
