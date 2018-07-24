# run-script
Dead simple script string to function execution with arguments, context and error catching.

Please note: this is a simple wrapper for creating new dynamic functions, similar to eval, which has performance and security issues. You may have heard "eval is evil", and while eval and `new Function()` can be harmful, it exists for a reason. 
To read up on this, check out [new Function()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) and [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

Some circumstances when invoking scripts is a good thing:
* Hot-loading mechanisms (although you might prefer swapping script[new Function()-elements when using a browser)
* "Playgrounds" such as CodePen, JSFiddle or JSBin
* Creating interactive coding tutorials
* Mimicing quick-search bars such as the Mac `cmd+space` Spotlight search tool (for adding, subtracting etc for example)

However, please refrain from using `eval()`, `new Function` or this `run-script` needlessly, if you want to convert to/from JSON, consider using `JSON.parse` and `JSON.stringify` instead. Same goes for any kind of serializing.

## Usage
```js
import runScript from 'run-script';

/*
runScript(
  script = 'string',
  arguments = {object}, (OPTIONAL) - arguments to be passed to the function, key/value object
  context = {object}, (OPTIONAL) - what to put as `this`
);
*/

const result = runScript('return true;'); 
// result = true

const result = runScript('return prop;', { prop: 'test' }); 
// result = 'test'

const result = runScript('return this.prop;', {}, { prop: 'context' });
// result = 'context'
```

## Error handling
By default errors are catched and returned as `{ error: <err> }`, like this:

```js
import runScript from 'run-script';

const result = runScript('this will produce a syntax error');

if (result.error) {
  console.log(`Whoops! ${result.error.name} has occured!`);
  // Will say 'Whoops! SyntaxError has occured!'
}
```

## Use with?
This exposes the runScript as `module.exports` (CommonJS-syntax), so it should work fine with anything that can handle CommonJS-syntax, such as webpack, rollup, transpilers and native NodeJS code. If you have any problem with it or if you would like it exposed in another way, please do not hesitate to open a ticket or pull request.
