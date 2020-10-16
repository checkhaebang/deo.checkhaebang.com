import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PersonaAnalysisFragment from "~/features/persona/pages";
import { BasicLayout } from "~/layouts";

export default function Root(): ReactElement {
  return (
    <BasicLayout>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
          <Route path="/persona" component={PersonaAnalysisFragment} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </BasicLayout>
  );
}
