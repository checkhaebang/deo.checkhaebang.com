import React from "react";
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";

import { Terms } from "./pages";
/**
 * /login
 * @param props
 */
const NoticeRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}/terms`} exact component={Terms} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}/terms`} />
    </Switch>
  );
};

export default withRouter(NoticeRouter);
