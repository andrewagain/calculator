import React from "react";
import PropTypes from "prop-types";

import "./Display.css";
import { ErrorBoundary } from "@rollbar/react";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <ErrorBoundary fallbackUI={DisplayError}>
        <DisplayValue {...this.props} />
      </ErrorBoundary>
    );
  }
}

const DisplayError = () => (
  <div className="component-display">
    <div>Error</div>
  </div>
);

class DisplayValue extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    if (this.props.value === '42') {
      // Generate demo error
      throw new Error('Illegal value');
    }

    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
