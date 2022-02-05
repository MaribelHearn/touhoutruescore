// Defines and exports a pg connection pool with which to make queries.

'use strict';

const config = require('../lib/config');
const logger = require('../lib/logger');

const pgp = require('pg-promise')();

logger.info('Starting database connection pool (%s:%s).', config.postgres_host, config.postgres_port);

const database = pgp({
    cn: {
        user: config.postgres_user,
        password: config.postgres_pass,
        host: config.postgres_host,
        port: config.postgres_post,
        database: config.database
    }
});

module.exports = database;
