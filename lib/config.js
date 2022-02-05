// Defines and makes available various config environment variables.

const logger = require('./logger');
const Environment = require('./env');

// We use dotenv to make it easy to set environment variables locally,
// but we don't really need it in production, so it isn't installed there.
let dotenv = null;
try {
    dotenv = require('dotenv');
} catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
        throw e;
    }
}

if (dotenv) {
    dotenv.config();
    logger.info('Loaded environment variables from .env');
} else {
    logger.info('dotenv not installed; not loading .env file');
}

module.exports = new Environment(process.env);
