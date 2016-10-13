import React from 'react';
import './Button.css';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <button
        className="component-button"
        onClick={this.handleClick}
      >
        {this.props.name}
      </button>
    );
  }
}
Button.propTypes = {
  name: React.PropTypes.string,
  clickHandler: React.PropTypes.func,
};
export default Button;
