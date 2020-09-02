import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 8) {
      this.setState(calculate(this.state, "AC"));
      return;
    }

    if (e.shiftKey && e.keyCode === 187) {
      this.setState(calculate(this.state, "+"));
      return;
    }

    if (e.keyCode === 13) {
      this.setState(calculate(this.state, "="));
      return;
    }

    if (e.shiftKey && e.keyCode === 189) {
      this.setState(calculate(this.state, "+/-"));
      return;
    } else if (e.keyCode === 189) {
      this.setState(calculate(this.state, "-"));
      return;
    }

    if (e.shiftKey && e.keyCode === 56) {
      this.setState(calculate(this.state, "x"));
      return;
    }

    if (e.keyCode === 191) {
      this.setState(calculate(this.state, "÷"));
      return;
    }

    if (e.shiftKey && e.keyCode === 53) {
      this.setState(calculate(this.state, "%"));
      return;
    }

    if (e.keyCode === 190) {
      this.setState(calculate(this.state, "."));
      return;
    }

    //handle only numbers keys
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      let keyCode = e.keyCode;

      //adjust to work with numpad numbers
      if (keyCode >= 96) {
        keyCode -= 48;
      }

      this.setState(calculate(this.state, String.fromCharCode(keyCode)));
    }
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
