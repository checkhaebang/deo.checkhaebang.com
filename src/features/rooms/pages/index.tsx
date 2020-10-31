import React, { ReactElement } from "react";
import { BasicLayout } from "~/layouts";
import Crawling from "./Crawling";

class Rooms extends React.Component {
  render(): ReactElement {
    return (
      <BasicLayout>
        <div></div>
      </BasicLayout>
    );
  }
}

export { Rooms, Crawling };
