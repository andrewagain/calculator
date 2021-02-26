import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    operationDisplay: PropTypes.bool,
  };

  render() {
    const className = [
      "component-display",
      this.props.operationDisplay ? "operation-display" : ""
    ];
    return (
      <div className={className.join(" ").trim()}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
