const { createLogger, format, transports } = require('../');
const util = require('util');

const logger = createLogger({
  level: 'silly',
  format: format.combine(
    format.colorize(),
    format.printf(info => {
      return Object.keys(info).reverse().reduce((acc, key, i) => {
        if (typeof key === 'string') {
          if (i > 0) acc += ", "
          acc += `"${key}": "${info[key]}"`
        }

        return acc;
      }, '{ ') + ' }';
    })
  ),
  transports: [new transports.Console()]
});

logger.info('hey colors!');
logger.error('oh and this one is red');
logger.silly('magenta maybe?');
