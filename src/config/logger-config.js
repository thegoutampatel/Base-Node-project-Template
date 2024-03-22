//WE USE THE PACKAGE NAME WINSTON FOR THE ERROR HANDLING 
//IT GIVE AS THE ERROR OF FILE WHEN AND WHERE OUR CODE GIVE ERRORS.

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} : ${level} : ${message}`;
});

const logger = createLogger({
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:MM:SS' }),
        customFormat
    ),
    transports:[
        new transports.Console(),
        new transports.File({ filename: 'combined.log' })
    ],
});

module.exports = logger;
