import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div
        className={className.join(" ").trim()}
      >
        <button
          onClick={this.handleClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: React.PropTypes.string,
  orange: React.PropTypes.bool,
  wide: React.PropTypes.bool,
  clickHandler: React.PropTypes.func,
};
export default Button;
