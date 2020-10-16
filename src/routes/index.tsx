import React, { ReactElement } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PersonaAnalysisFragment from "~/features/persona/pages";
import { BasicLayout } from "~/layouts";

function SplashView(): ReactElement {
  return <Link to="/persona">자취 유형 테스트 시작</Link>;
}

export default function Root(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SplashView} />
        <BasicLayout>
          <Route path="/persona" component={PersonaAnalysisFragment} />
        </BasicLayout>
      </Switch>
    </BrowserRouter>
  );
}
