'use strict';

const pino = require('pino');

const options = {}
if (process.env['NODE_ENV'] != 'production') {
    options.transport = {
        target: 'pino-pretty'
    }
}

module.exports = pino(options);
