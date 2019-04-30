import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     total: null,
  //     next: null,
  //     operation: null,
  //   };
  // }
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="component-app">
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};
export default App;
