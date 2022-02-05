// Defines and exports a pg connection pool with which to make queries.

const config = require('../lib/config');
const logger = require('../lib/logger');

const pg = require('pg');

logger.info('Starting database connection pool (%s:%s).', config.postgres_host, config.postgres_port);

const pool = new pg.Pool({
    user: config.postgres_user,
    password: config.postgres_pass,
    host: config.postgres_host,
    port: config.postgres_post
});

module.exports = pool;
