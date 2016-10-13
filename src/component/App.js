import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  render() {
    return (
      <div>
        <Display
          value="117"
        />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;
