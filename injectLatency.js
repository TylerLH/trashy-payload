'use strict'

/**
* A middleware to inject artificial latency into a response
* Uses query param delay=x where x is the number of milliseconds to wait
*/

module.exports = function(req, res, next) {
    if (req.query.delay) {
        const duration = parseInt(req.query.delay, 10)
        setTimeout(next, duration)
    } else {
        next()
    }
}
