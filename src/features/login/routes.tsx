import React from "react";
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";

import { Google } from "./pages";
/**
 * /login
 * @param props
 */
const LoginRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}/google`} exact component={Google} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}/google`} />
    </Switch>
  );
};

export default withRouter(LoginRouter);
