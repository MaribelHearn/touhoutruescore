'use strict';

const db = require('../db/db');

/**
 * Throw an error if we are not connected to the test database.
 * 
 * This function exists so we don't actually erase the production database, which
 * would be bad.
 */
async function check_test_db() {
    const db_result = await db.one('SELECT current_database() as db_name;');
    const db_name = db_result.db_name;
    if (db_name !== 'test') {
        throw Error(`Something has gone wrong: db is ${db_name}, not a test db`);
    }
}

module.exports = check_test_db
