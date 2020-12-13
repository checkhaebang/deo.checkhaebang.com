import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "tslib";

import React from "react";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga";

import store from "./store";
import * as serviceWorker from "./serviceWorker";

import "./App.css";
import Application from "./App";

ReactGA.initialize("G-B6M718WEKZ");

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Provider store={store}>
        <Application />
      </Provider>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Application />
      </Provider>
    </React.StrictMode>,
    rootElement
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
