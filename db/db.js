// Defines and exports a pg connection pool with which to make queries.

const config = require('../lib/config');

const pg = require('pg');

const pool = new pg.Pool({
    user: config.postgres_user,
    password: config.postgres_pass,
    host: config.postgres_host,
    port: config.postgres_post
});

module.exports = pool;
