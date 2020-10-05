const keyCodes = {
  BACKSPACE: 8,
  EQUAL: 13,
  ADD: 187,
  SUB: 189,
  MULTIPLY: 56,
  DIV: 191,
  PERCENT: 53,
  DOT: 190,
  COLOR: 67,
};

const keyHandle = function(event) {
  if (event.shiftKey && event.keyCode === keyCodes.BACKSPACE) {
    return "AC";
  }

  if (event.keyCode === keyCodes.BACKSPACE) {
    return "\u232b";
  }

  if (event.shiftKey && event.keyCode === keyCodes.ADD) {
    return "+";
  }
  if (event.keyCode === keyCodes.EQUAL) {
    return "=";
  }
  if (event.shiftKey && event.keyCode === keyCodes.SUB) {
    return "+/-";
  } else if (event.keyCode === keyCodes.SUB) {
    return "-";
  }
  if (event.shiftKey && event.keyCode === keyCodes.MULTIPLY) {
    return "x";
  }
  if (event.keyCode === keyCodes.DIV) {
    return "÷";
  }
  if (event.shiftKey && event.keyCode === keyCodes.PERCENT) {
    return "%";
  }
  if (event.keyCode === keyCodes.DOT) {
    return ".";
  }

  //handle only numbers keys
  if (
    (event.keyCode >= 48 && event.keyCode <= 57) ||
    (event.keyCode >= 96 && event.keyCode <= 105)
  ) {
    let keyCode = event.keyCode;

    //adjust to work with numpad numbers
    if (keyCode >= 96) {
      keyCode -= 48;
    }

    return String.fromCharCode(keyCode);
  }
};

const methods = {
  keyCodes,
  keyHandle,
};

module.exports = methods;
