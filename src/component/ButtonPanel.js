import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = e => {
    this.props.clickHandler(e.target.textContent);
  };

  render() {
    return (
      <div className="component-button-panel" onClick={this.handleClick}>
        <div>
          <Button name="AC" />
          <Button name="+/-" />
          <Button name="%" />
          <Button name="÷" orange />
        </div>
        <div>
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
          <Button name="x" orange />
        </div>
        <div>
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
          <Button name="-" orange />
        </div>
        <div>
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
          <Button name="+" orange />
        </div>
        <div>
          <Button name="0" wide />
          <Button name="." />
          <Button name="=" orange />
        </div>
      </div>
    );
  }
}
