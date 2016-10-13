import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    console.log('click');
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
      >
        {this.props.name}
      </button>
    );
  }
}
Button.propTypes = {
  name: React.PropTypes.string,
};
export default Button;
