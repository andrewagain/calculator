import Big from "big.js";

type operators = string | null | undefined

export default function operate(numberOne: operators, numberTwo: operators, operation: operators): string {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    if (two.toString() === "0") {
      alert("Divide by 0 error");
      return "0";
    } else {
      return one.div(two).toString();
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
