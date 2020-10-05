import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import { keyHandle } from "../utils/keys";

import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    theme: localStorage.getItem("theme")
      ? parseInt(localStorage.getItem("theme"))
      : 0,
    color: localStorage.getItem("color")
      ? localStorage.getItem("color")
      : "orange",
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    e.preventDefault();

    this.setState(calculate(this.state, keyHandle(e)));

    //handle color theme
    if (e.keyCode === 67) {
      this.setState({ color: this.handleColor() });
    }
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  handleColor = () => {
    this.setState({ theme: this.state.theme !== 3 ? this.state.theme + 1 : 1 });

    switch (this.state.theme) {
      case 1:
        localStorage.setItem("theme", 1);
        localStorage.setItem("color", "orange");
        return "orange";
      case 2:
        localStorage.setItem("theme", 2);
        localStorage.setItem("color", "red");
        return "red";
      case 3:
        localStorage.setItem("theme", 3);
        localStorage.setItem("color", "purple");
        this.setState({ theme: 0 });
        return "purple";
      default:
        localStorage.setItem("theme", 1);
        localStorage.setItem("color", "orange");
        this.setState({ theme: 0 });
        return "orange";
    }
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel
          clickHandler={this.handleClick}
          colorTheme={this.state.color}
        />
      </div>
    );
  }
}
