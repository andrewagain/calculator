import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    let className = "component-button";
    if (this.props.orange) {
      className += " orange";
    }
    if (this.props.wide) {
      className += " wide";
    }

    return (
      <div
        className={className}
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
