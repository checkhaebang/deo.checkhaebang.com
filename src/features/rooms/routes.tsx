import React from "react";
import {
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import Rooms, { Crawling, Add, Detail } from "./pages";

const RoomRouter: React.FC<RouteComponentProps> = (props) => {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}`} exact component={Rooms} />
      <Route path={`${match.url}/crawling`} exact component={Crawling} />
      <Route path={`${match.url}/add`} exact component={Add} />
      <Route path={`${match.url}/:id`} exact component={Detail} />
      <Redirect path={`${match.url}*`} exact to={`${match.url}`} />
    </Switch>
  );
};
export default withRouter(RoomRouter);
