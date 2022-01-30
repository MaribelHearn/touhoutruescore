const db = require('./db');

// TODO: Set up a real infrastructure to run tests against a test database.

describe('db', () => {
    test('works', async () => {
        const result = await db.query('SELECT 5 as five');
        expect(result.rows).toHaveLength(1);
        expect(result.rows[0].five).toEqual(5);
    });

    afterAll(async () => {
        await db.end();
    })
});
