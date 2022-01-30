const bcrypt = require('bcrypt');

const db = require('../db/db');

const saltRounds = 10;

async function create_account_with_login(username, email, password) {
    // TODO: This function is actually buggy because it does not use transactions.
    // We should use transactions instead so we do not get the database into an
    // inconsistent state, but using transactions while directly using 'pg' is a pain,
    // so we should use a higher-level library like 'pg-promise' to do this.

    const password_hash_promise = bcrypt.hash(password, saltRounds);
    const accounts_result = await db.query(`
    INSERT INTO accounts (email, username) VALUES ($1, $2) RETURNING account_id;
    `, [email, username]);
    const account_id = accounts_result.rows[0].account_id;

    await db.query(`
    INSERT INTO passwords (account_id, password_hash) VALUES ($1, $2);
    `, [account_id, await password_hash_promise]);
}

async function check_password(username, password) {
    const account_result = await db.query(`
        SELECT (account_id) FROM accounts
        WHERE username = $1;
    `, [username]);
    if (account_result.rowCount == 0) {
        throw Error(`No user with name ${username}`);
    }
    const account_id = account_result.rows[0].account_id;
    const password_hash_result = await db.query(`
        SELECT (password_hash) FROM passwords
        WHERE account_id = $1
    `, [account_id])
    if (password_hash_result.rowCount == 0) {
        throw Error(`${username} has no password`);
    }
    const password_hash = password_hash_result.rows[0].password_hash;
    
    const comparison = await bcrypt.compare(password, password_hash);
    return comparison;
}

module.exports = {
    create_account_with_login,
    check_password
};
