'use strict';

const db = require('./db');

describe('db', () => {
    test('works', async () => {
        const result = await db.one(
            'SELECT 5 as five'
        );
        expect(result.five).toBe(5);
    });
});
