import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.renderButton= this.renderButton.bind(this);
  }

  componentDidMount() {
    this.setState({currName: this.props.name})
  }

  handleClick() {
    this.props.clickHandler(this.props.name);
  };

  renderButton() {
    const {currName} = this.state;
    return (
      <button onClick={this.handleClick}>{currName}</button>
    );
  }

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        {this.renderButton()}
      </div>
    );
  }
}
