import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  buttonRows = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
  ]

  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  
  getButtonRows(){
    return this.buttonRows.map((buttons, index)=><div key={index}>{this.getButtons(buttons)}</div>);
  }
  getButtons(buttons){
    let buttonLength = buttons.length;
    return buttons.map((buttonName, index) => <Button name={buttonName} key={buttonName} clickHandler={this.handleClick} orange={index === buttonLength-1} wide={!index && buttonLength<4} /> )
  }
  render() {
    return (
      <div className="component-button-panel">
          {this.getButtonRows()}
      </div>
    );
  }
}
