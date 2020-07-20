const keyCodes = {
  SPACE: 32,
  DELETE: 46,
  BACKSPACE: 8,
  ENTER: 13
}
const isAlphaNumericKey = function(orgEvent) {
  let keyCode = orgEvent.keyCode;
  return !(orgEvent.metaKey || orgEvent.ctrlKey) && ((keyCode >= 186 && keyCode <= 192) || (keyCode >= 219 && keyCode <= 222) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90 )|| (keyCode >= 97 && keyCode <= 122) || (keyCode === keyCodes.SPACE || keyCode === keyCodes.DELETE || keyCode === keyCodes.BACKSPACE));
}
const helpers = {
  keyCodes,
  isAlphaNumericKey
}
module.exports = helpers;