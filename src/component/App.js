import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

// -->New App built using function instead of class
export default function AppFunction() {
  // -->Initialize a state
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null
  });

  // -->Handle Click function that takes a button value
  //    passes it through the logic.js
  //    and sets the state to the object returned from calculate
  function handleClick(buttonName) {
    console.log(buttonName);
    setState(calculate(state, buttonName));
  }

  return (
    <div className="component-app">
      {/* State is sent to the display component */}
      <Display value={state.next || state.total || "0"} />

      {/* handleClick is a callback function that sends back button name */}
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
}
