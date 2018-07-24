const winston = require('../');
const { createLogger, format, transports } = winston;

const logger = winston.createLogger({
  // format: format.combine(
  //   format.splat(),
  //   format.simple()
  // ),
  transports :[
    new winston.transports.Console()
  ]
})

//logger.info(`npm version patch -m "Upgrade to %j"`, { status: 'OK' })
logger.info('some message', "abc");
