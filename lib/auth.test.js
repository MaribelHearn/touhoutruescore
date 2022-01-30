const auth = require('./auth');
const db = require('../db/db');


// TODO: Set up a real infrastructure to run tests against a test database.

describe('auth', () => {
    beforeEach(async () => {
        await db.query('DELETE FROM accounts;');
    });

    test('checks matching password', async () => {
        await auth.create_account_with_login('test', 'test@example.com', 'a-password');
        const matches = await auth.check_password('test', 'a-password');
        expect(matches).toBeTruthy();
    });

    test('checks wrong password', async () => {
        await auth.create_account_with_login('test', 'test@example.com', 'a-password');
        const matches = await auth.check_password('test', 'a-different-password');
        expect(matches).not.toBeTruthy();
    })

    afterAll(async () => {
        await db.end();
    })
});
