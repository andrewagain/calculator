import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";


export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  constructor(props){
    super(props);
    this.inputRef = React.createRef();    //ref to focus master div
  }

  componentDidMount(){
    this.inputRef.current.focus();    //focusing master div to listen keyboard press
  }

  keyHandler = (e) => {
    console.log(e.key);
    if(e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key == 7 || e.key == 8 || e.key == 9
      || e.key == '+' || e.key == '-' || e.key == "%" || e.key == "."){
            this.setState(calculate(this.state, e.key));
      }
      else if(e.key == "Enter"){
          this.setState(calculate(this.state, "="));
      }
      else if(e.key == "*"){
        this.setState(calculate(this.state, 'x'));
      }
      else if(e.key == "/"){
        this.setState(calculate(this.state, '÷'));
      }

  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };



  render() {
    return (
      <div className="component-app" ref={this.inputRef} onKeyDown={this.keyHandler} tabIndex="0">
        <Display value={this.state.next || this.state.total || "0"}/>
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
