import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <div className="calc-operation">
          {this.props.value.total} {this.props.value.operation} {this.props.value.next}
        </div>
        <div>      
          {this.props.value.next || this.props.value.total || '0'}
        </div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.object,
};
export default Display;
