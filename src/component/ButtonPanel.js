import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  buttonRows = [
      ["AC", "+/-", "%", "÷"],
      ["7", "8", "9", "x"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "="]
  ]

  refs = {

  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  getButtonRows(){
      return this.buttonRows.map((buttons)=>{
            return <div>{
                buttons.map((button, index) => {
                    return <Button name={button} clickHandler={this.handleClick} wide={!index && buttons.length<4} />
            })} </div>
      });
  }

  render() {
    return (
      <div className="component-button-panel">
          {this.getButtonRows()}
      </div>
    );
  }
}
