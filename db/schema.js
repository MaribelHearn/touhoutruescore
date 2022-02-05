'use strict';

const db = require('./db');
const fs = require('fs').promises;

const logger = require('../lib/logger');

async function run_script(filename) {
    const data = await fs.readFile(`./db/tables/${filename}.sql`, "utf-8");
    await db.query(data);
    logger.info('Executed script %s', filename);
}

/**
 * Delete all rows, but leave the tables. Useful for tests.
 */
async function delete_all_tables() {
    await db.query('DELETE FROM accounts;');
    await db.query('DELETE FROM passwords;');

}

async function drop_all_tables() {
    await db.query('DROP TABLE IF EXISTS passwords;');
    await db.query('DROP TABLE IF EXISTS accounts;');
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