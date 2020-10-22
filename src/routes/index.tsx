import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PersonaAnalysisFragment from "~/features/persona/pages";
import { BasicLayout } from "~/layouts";
import LandingPage from "~/features/landing";

export default function Root(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <BasicLayout>
          <Route path="/persona" component={PersonaAnalysisFragment} />
        </BasicLayout>
      </Switch>
    </BrowserRouter>
  );
}
