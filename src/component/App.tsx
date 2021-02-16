import React, {useState}from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

interface CalculatorData {
  total: null | string,
  next: null | string,
  operation: null | string,
}

const App = (): JSX.Element => {
  const [state, setState] = useState<CalculatorData>({
    total: null,
    next: null,
    operation: null,
  })
  // const [total, setTotal] = useState(null)
  // const [next, setNext] = useState(null)
  // const [operations, setOperation] = useState(null)
  console.log(state)
  const handleClick = (buttonName: string) => {
    setState(state => ({...state, ...calculate(state, buttonName)}));
  };

  return (
      <div className="component-app">
        <Display value={state.next || state.total || "0"} />
        <ButtonPanel clickHandler={handleClick} />
      </div>

  )
}

export default App


// export default class App extends React.Component {
//   state = {
//     total: null,
//     next: null,
//     operation: null,
//   };
//   handleClick = buttonName => {
//     this.setState(calculate(this.state, buttonName));
//     console.log(this.state)
//   };

//   render() {
//     return (
//       <div className="component-app">
//         <Display value={this.state.next || this.state.total || "0"} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }
