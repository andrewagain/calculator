const helpers = {
    keyCode:{
        SPACE: 32,
        DELETE: 46,
        BACKSPACE: 8
    },
    isAlphaNumericKey: function(orgEvent) {
        let keyCode = orgEvent.keyCode;
        return !(orgEvent.metaKey || orgEvent.ctrlKey) && ((keyCode >= 186 && keyCode <= 192) || (keyCode >= 219 && keyCode <= 222) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90 )|| (keyCode >= 97 && keyCode <= 122) || (keyCode === helpers.keyCode.SPACE || keyCode === helpers.keyCode.DELETE || keyCode === helpers.keyCode.BACKSPACE));
    },
    fromCharCode: function(keyCode){
        String.fromCharCode((96 <= keyCode && keyCode <= 105)? keyCode-48 : keyCode)
    }
}
module.exports = helpers;