import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import {isAlphaNumericKey} from '../utils/helper_methods';
import "./App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    keyPressed:null
  };

  handleClick = (buttonName, onKeyPress) => {
    var newStates = calculate(this.state, buttonName, onKeyPress)
    if(newStates){
        newStates.keyPressed = null;
        this.setState(newStates);
    }else{
        this.setState({
            keyPressed:null
        });
    }
  };

  handleKeyDown = (orgEvent)=>{
      if(isAlphaNumericKey(orgEvent)){
            this.setState({
                keyPressed: orgEvent.key
            });
      }
  };

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.handleKeyDown} className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} keyPressed={this.state.keyPressed}/>
      </div>
    );
  }
}
