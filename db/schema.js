'use strict';

const {QueryFile} = require('pg-promise');

const db = require('./db');

const logger = require('../lib/logger');

async function run_script(filename) {
    const qf = new QueryFile(`${__dirname}/tables/${filename}.sql`);
    await db.none(qf);
    logger.info('Executed script %s', filename);
}

/**
 * Delete all rows, but leave the tables. Useful for tests.
 */
async function delete_all_tables() {
    await db.none('DELETE FROM accounts;');
    await db.none('DELETE FROM passwords;');

}

async function drop_all_tables() {
    await db.none('DROP TABLE IF EXISTS passwords;');
    await db.none('DROP TABLE IF EXISTS accounts;');
}

async function create_all_tables() {
    await run_script('accounts');
    await run_script('passwords');
}

module.exports = {
    create_all_tables,
    drop_all_tables,
    delete_all_tables,
}