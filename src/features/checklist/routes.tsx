import React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import { Creating } from "./pages";

const ChecklistRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route path={`${match.url}/creating`} exact component={Creating} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}/creating`} />
    </Switch>
  );
};

export default withRouter(ChecklistRouter);
