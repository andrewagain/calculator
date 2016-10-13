import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  handleClick = (buttonName) => {
    console.log('click', buttonName);
  }

  render() {
    return (
      <div>
        <Display
          value="117"
        />
        <ButtonPanel
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
