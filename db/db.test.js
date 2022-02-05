'use strict';

const db = require('./db');

describe('db', () => {
    test('works', async () => {
        const result = await db.query('SELECT 5 as five');
        expect(result.rows).toHaveLength(1);
        expect(result.rows[0].five).toEqual(5);
    });
});
