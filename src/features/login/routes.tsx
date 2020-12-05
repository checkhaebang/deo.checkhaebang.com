import React from "react";
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";

import { Kakao } from "./pages";
/**
 * /login
 * @param props
 */
const LoginRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}/kakao`} exact component={Kakao} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}/kakao`} />
    </Switch>
  );
};

export default withRouter(LoginRouter);
