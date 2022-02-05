// Use the test database for unit tests.
process.env['PGDATABASE'] = 'test';

const check_test_db = require('./check_test_db');
const schema = require('../db/schema');
const logger = require('../lib/logger');

module.exports = async function global_setup() {
    await check_test_db();

    await schema.drop_all_tables();
    await schema.create_all_tables();
    logger.info('Refreshed schema');
}