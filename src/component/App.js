import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

import {
  Provider,
  Context,
  ErrorBoundary,
  useRollbar,
  useRollbarCaptureEvent,
  LEVEL_INFO,
  useRollbarPerson,
  useContext,
  RollbarContext,
  historyContext
} from '@rollbar/react';

const rollbarConfig = {
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
}

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <Provider config={rollbarConfig}>
        <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </Provider>
    );
  }
}
