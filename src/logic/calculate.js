import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";

// Note --> the logic needed a small update
// 1. we're retuning back an object to the App
//    which then uses useState to set the state
// 2. the object retured should be exactly the same the state
// 3. using the spread operator ... you can spread all the previous
//    values of the object (obj) and then continue modifying it
// 4. TL;DR --> use the ...obj first in the return statement

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    // ---> update the return state here --> Done
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      // ---> update the return state here -->
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        // ---> update the return state here
        return { ...obj, next: obj.next + buttonName };
      }
      // ---> update the return state here
      return { ...obj, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      // ---> update the return state here
      return {
        ...obj,
        next,
        total: null
      };
    }
    // ---> update the return state here
    return {
      ...obj,
      next: buttonName,
      total: null
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const result = operate(obj.total, obj.next, obj.operation);
      // ---> update the return state here
      return {
        ...obj,
        total: Big(result).div(Big("100")).toString(),
        next: null,
        operation: null
      };
    }
    if (obj.next) {
      // ---> update the return state here
      return {
        ...obj,
        next: Big(obj.next).div(Big("100")).toString()
      };
    }
    // ---> update the return state here
    return { ...obj };
  }

  if (buttonName === ".") {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes(".")) {
        // ---> update the return state here
        return { ...obj };
      }
      // ---> update the return state here
      return { ...obj, next: obj.next + "." };
    }
    // ---> update the return state here
    return { ...obj, next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      // ---> update the return state here
      return {
        ...obj,
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      };
    } else {
      // '=' with no operation, nothing to do
      // ---> update the return state here
      return { ...obj };
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      // ---> update the return state here
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      // ---> update the return state here
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    // ---> update the return state here
    return { ...obj };
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  // ---> update the return state here
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    // ---> update the return state here
    return {
      ...obj,
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    // ---> update the return state here
    return { ...obj, operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  // ---> update the return state here
  return {
    ...obj,
    total: obj.next,
    next: null,
    operation: buttonName
  };
}
