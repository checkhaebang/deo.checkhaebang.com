import React from "react";
import {
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { Questions, Analyzing, Result } from "./pages";

const PersonaRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/analyzing`} exact component={Analyzing} />
      <Route path={`${match.url}/questions`} exact component={Questions} />
      <Route path={`${match.url}/result`} exact component={Result} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}/questions`} />
    </Switch>
  );
};
export default withRouter(PersonaRouter);
