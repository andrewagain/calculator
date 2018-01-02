import Button from './Button'
import React from 'react'
import PropTypes from 'prop-types'

import './ButtonPanel.css'

class ButtonPanel extends React.Component {
  handleClick(buttonName) {
    this.props.clickHandler(buttonName)
  }

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick.bind(this)} />
          <Button name="+/-" clickHandler={this.handleClick.bind(this)} />
          <Button name="%" clickHandler={this.handleClick.bind(this)} />
          <Button name="÷" clickHandler={this.handleClick.bind(this)} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick.bind(this)} />
          <Button name="8" clickHandler={this.handleClick.bind(this)} />
          <Button name="9" clickHandler={this.handleClick.bind(this)} />
          <Button name="x" clickHandler={this.handleClick.bind(this)} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick.bind(this)} />
          <Button name="5" clickHandler={this.handleClick.bind(this)} />
          <Button name="6" clickHandler={this.handleClick.bind(this)} />
          <Button name="-" clickHandler={this.handleClick.bind(this)} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick.bind(this)} />
          <Button name="2" clickHandler={this.handleClick.bind(this)} />
          <Button name="3" clickHandler={this.handleClick.bind(this)} />
          <Button name="+" clickHandler={this.handleClick.bind(this)} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick.bind(this)} wide />
          <Button name="." clickHandler={this.handleClick.bind(this)} />
          <Button name="=" clickHandler={this.handleClick.bind(this)} orange />
        </div>
      </div>
    )
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
}
export default ButtonPanel
