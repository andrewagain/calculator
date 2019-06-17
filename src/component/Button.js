import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {

  state = {
    isClicked: false
  }

  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
    this.setState((prevState, props) => ({
      isClicked: !prevState.isClicked
    }));
    setTimeout(() => {
      this.setState((prevState, props) => ({
        isClicked: !prevState.isClicked
      }));
    }, 100);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
      this.state.isClicked ? "is-clicked": ""
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
