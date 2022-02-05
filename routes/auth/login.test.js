'use strict';

const build = require('../../app');

describe('GET /login', () => {
    test('works', async () => {
        const app = build();
        const response = await app.inject({
            method: 'GET',
            url: '/login'
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toMatch(/Log in/);
    });
});
