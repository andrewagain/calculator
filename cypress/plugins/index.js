const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const webpackOptions = require('./webpack.config.js')

module.exports = on => {
  on('file:preprocessor', webpackPreprocessor({ webpackOptions }))
}
