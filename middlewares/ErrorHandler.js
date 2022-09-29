const { logEvents } = require('./Logger')

const ErrorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, 'errorLog.txt')
    console.error(err.stack)
    const status = res.statusCode ? res.statusCode : 500
    res.status(status).json({ message : err.message })
}

module.exports = {ErrorHandler}
