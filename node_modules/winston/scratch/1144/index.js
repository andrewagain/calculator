// load dependencies
var chokidar = require('chokidar')
var fs = require('fs-extra')
var path = require('path')

const { createLogger, format, transports } = require('../../')
const { combine, timestamp, label, printf, colorize } = format

const MATERIALS = './materials'
const NODE_ENV = process.env.NODE_ENV || 'development'



// log configuration
const myFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`
})


const logger = createLogger({
  format: combine(
    colorize(),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File({
      filename: 'combined.log'
    })
  ]
})


//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    level: 'debug'
  }))
}

// Initialize watcher.
var watcher = chokidar.watch(MATERIALS)

// Add event listeners.
watcher
  .on('addDir', (dir) => {
    logger.info(`ADDED DIRECTORY: ${path.resolve(MATERIALS, dir)}`)
  })
  .on('error', error => logger.error(`WATCHER ERROR: ${error}`))
  .on('ready', () => logger.info('Initial scan complete, waiting for changes'))
