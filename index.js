'use strict'

const express       = require('express')
const bodyParser    = require('body-parser')
const fs            = require('fs')
const injectLatency = require('./injectLatency')
const app           = express()

app.use(bodyParser.json())

app.get('/', injectLatency, (req, res) => {
    res.send("Hello world!")
})

app.get('/big-file.jpg', (req, res) => {
    let size = 1000 * 1000
    if (req.query.size) {
        size = parseInt(req.query.size)
    }
    const buf = new Buffer(size)
    res.send(buf.toString('base64'))
})

module.exports = app
