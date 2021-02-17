import Button from "./Button";
import React from "react";
// import PropTypes from "prop-types";

import "./ButtonPanel.css";

interface FuntionProps {
  clickHandler: (buttonName: string) => void
}

const ButtonPanel = (props: FuntionProps): JSX.Element => {

  const handleClick = (buttonName: string) => {
    props.clickHandler(buttonName);
  }
  
  return(
    <div className="component-button-panel">
      <div>
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name="0" clickHandler={handleClick} wide />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} orange />
      </div>
    </div>
  )
} 

export default ButtonPanel

// export default class ButtonPanel extends React.Component {
//   static propTypes = {
//     clickHandler: PropTypes.func,
//   };

//   handleClick = buttonName => {
//     this.props.clickHandler(buttonName);
//   };

//   render() {
//     return (
//       <div className="component-button-panel">
//         <div>
//           <Button name="AC" clickHandler={this.handleClick} />
//           <Button name="+/-" clickHandler={this.handleClick} />
//           <Button name="%" clickHandler={this.handleClick} />
//           <Button name="÷" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="7" clickHandler={this.handleClick} />
//           <Button name="8" clickHandler={this.handleClick} />
//           <Button name="9" clickHandler={this.handleClick} />
//           <Button name="x" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="4" clickHandler={this.handleClick} />
//           <Button name="5" clickHandler={this.handleClick} />
//           <Button name="6" clickHandler={this.handleClick} />
//           <Button name="-" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="1" clickHandler={this.handleClick} />
//           <Button name="2" clickHandler={this.handleClick} />
//           <Button name="3" clickHandler={this.handleClick} />
//           <Button name="+" clickHandler={this.handleClick} orange />
//         </div>
//         <div>
//           <Button name="0" clickHandler={this.handleClick} wide />
//           <Button name="." clickHandler={this.handleClick} />
//           <Button name="=" clickHandler={this.handleClick} orange />
//         </div>
//       </div>
//     );
//   }
// }
