import React, { Component } from "react";

export default class ButtonRow extends Component {
  render() {
    //   {{btn1, btn2, btn3, btn4}, x } = this.props
    view = [];
    for (i = 0; i < items; i++) {
      view.append(
        <ButtonRow name={names[i]} clickHandler={this.handleClick} id={""} />,
      );
    }
    <div>
      <Button name="AC" clickHandler={this.handleClick} />
      <Button name="+/-" clickHandler={this.handleClick} />
      <Button name="%" clickHandler={this.handleClick} />
      <Button name="÷" clickHandler={this.handleClick} orange />
    </div>;
  }
}
