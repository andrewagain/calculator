import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value: React.PropTypes.string,
};
export default Display;
