import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "tslib";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga";

import store from "./store";
import * as serviceWorker from "./serviceWorker";

import "./App.css";
import Root from "./routes";

ReactGA.initialize("G-B6M718WEKZ");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
