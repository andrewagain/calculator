"use strict";

function runScript(script, args, context) {
  args = typeof args === 'undefined' ? {} : args;
  try {
    var f = Function.apply(undefined, Object.keys(args).concat([script]));
    return f.apply(context, Object.keys(args).map(function (k) {
      return args[k];
    }));
  } catch (err) {
    return { error: err };
  }
}

module.exports = runScript;
