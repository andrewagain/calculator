import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";
/**
  Calculator data object contains:
  numStack - Numbers that are yet to be processed are pushed to stack.
  operStack - Operators that are yet to be processed are pushed to stack.
  lastNumPressed - Last number pressed by the user.
  lastOperPressed - Last operaator pressed by the user.
  lastPressed : "number" | "operator" - Whether last pressed
  displayValue: The value displayed in the display area.
*/
export default function calculate(obj, key) {
  let numStack = obj.numStack || [];
  let operStack = obj.operStack || [];
  let lastNumPressed = obj.lastNumPressed;
  let lastOperPressed = obj.lastOperPressed;
  let lastPressed = obj.lastPressed;
  let displayValue = obj.displayValue;

  let processSingleOperation = ()=>{
    let secondNum = numStack.pop();
    let firstNum = numStack.pop();
    let result = operate(firstNum, secondNum, operStack.pop());
    numStack.push(parseFloat(result));
    displayValue = result;
  }
  
  let processStack = (processAll)=>{
    if(numStack.length>1){
      if(lastPressed === "operator"){
        operStack.pop();
      }
      if(processAll){
        while(numStack.length>1){
          processSingleOperation(); 
        }
      }else{
        processSingleOperation(); 
      }
    }
    return displayValue;
  }
  let validCalcKeys = ["AC", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+","0", ".", "=", "Backspace"];
  if(validCalcKeys.includes(key)){
    if(key === "AC"){
      numStack = [];
      operStack = [];
      lastNumPressed = null;
      lastOperPressed = null;
      lastPressed = null;
      displayValue = null;
      lastPressed = key;
    }else if(key === "="){
      processStack(true);
      lastPressed = key;
    }else if(key === "+/-"){
      lastNumPressed = parseFloat(displayValue) * -1;
      displayValue = String(lastNumPressed);
      numStack.pop();
      numStack.push(lastNumPressed);
      lastPressed = key;
    }else if(key === "Backspace"){
      /** Last character is removed when backspace is pressed */
      displayValue = displayValue.slice(0, displayValue.length-1);
      lastNumPressed = parseFloat(displayValue || 0);
      numStack.pop();
      numStack.push(lastNumPressed);
      lastPressed = "number";
    }else{
      let isDecimalPt = key === ".";
      if(isNumber(key) && (!isDecimalPt || !displayValue.includes("."))){
        if(lastPressed === "number"){
          displayValue = (displayValue === "0" && !isDecimalPt ? "" : displayValue) + key;
          /* Since we are concating to the previous number, we need to replace the last pushed value */
          numStack.pop();
        }else{
          /* On pressing (= (or) +/- (or) AC), the previous numbers are omitted.
          */
          if(lastPressed === "=" || lastPressed === "+/-"){
            numStack=[];
          }
          displayValue = isDecimalPt ? "0." : key;
        }
        lastNumPressed = parseFloat(displayValue || 0);
        numStack.push(lastNumPressed)
        lastPressed = "number";
      }else{
        if(key === '%'){
          if(displayValue && displayValue !== "0"){
            if(lastPressed === 'operator'){
              operStack.pop();
            }
            let updatedNum = Big(displayValue).div(Big("100"));
            numStack.pop();
            numStack.push(updatedNum);
            displayValue = String(updatedNum);
            lastPressed = "number";
          }
        }else{
          if(lastPressed){
            if(lastPressed === "operator"){
              /**
               * If lastpressed key is an operator, it has to be replaced.
              */
              operStack.pop();
            }else{
              /**
               * Behavior implemented from Mac calculator.
               * 1. If last pressed operator precedence is equalto / morethan the current operators hierachy, the previous operations are calculated before proceeding with the current one.
               * 2. (x|÷|%) has high precedence than (+|-)
              */
              let getPrecedence = (operator)=> ["x", "÷"].includes(operator);
              let currentOperPrecedence = getPrecedence(key);
              let prevOperPrecedence = getPrecedence(lastOperPressed);
              if ((currentOperPrecedence === prevOperPrecedence) || (currentOperPrecedence<prevOperPrecedence)){
                processStack();
                lastNumPressed = parseFloat(displayValue);
              }
            }
          }
          if(!numStack.length){
            numStack.push(0);
          }
          operStack.push(key); 
          lastPressed = "operator";
        } 
        lastOperPressed = key;
      }
    }
  }

  return{
    numStack,
    operStack,
    lastOperPressed,
    lastNumPressed,
    lastPressed,
    displayValue: displayValue || "0"
  }
}