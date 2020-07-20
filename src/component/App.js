import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import {isAlphaNumericKey, keyCodes} from '../utils/helper_methods';
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  componentDidMount = ()=>{
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount = ()=>{
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (orgEvent)=>{
    let key = orgEvent.key;
    let isENTERKey = orgEvent.keyCode === keyCodes.ENTER;
    if(isENTERKey || isAlphaNumericKey(orgEvent)){
      if(key !== "x" && key !== "÷"){
        if(key === '*'){ 
          key = 'x'; 
        }else if(key === "/"){ 
          key = "÷"; 
        }else if(isENTERKey){
          key = "="; 
        }
        let validCalcKeys = ["%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+","0", ".", "=", "Backspace"];
        if(validCalcKeys.indexOf(key) !== -1){
          this.handleClick(key, true);
        }
      }
    }
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
