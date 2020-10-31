import React from "react";
import {
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { Crawling, Rooms } from "./pages";

const RoomRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={Rooms} />
      <Route path={`${match.url}/crawling`} exact component={Crawling} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}`} />
    </Switch>
  );
};
export default withRouter(RoomRouter);
