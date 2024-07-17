"use strict"
/* -------------------------------------------------
        EXPRESSJS - ERROR HANDLER MIDDLEWARE
---------------------------------------------------*/

module.exports = (err, req, res, next) => {

    const errorStatusCode = err.errorStatusCode || 500
    
    console.log('ErrorHandler worked.')

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        // stack: err.stack
    })
}