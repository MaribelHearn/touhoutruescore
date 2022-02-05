'use strict';

const Environment = require('./env');

describe('env', () => {
    test('sets env', () => {
        const process_env = {
            PGHOST: 'some-host',
            PGPORT: '2345',
            PGUSER: 'some-user',
            PGPASSWORD: 'password',
            PGDATABASE: 'db'
        };
        const e = new Environment(process_env);
        expect(e.database).toBe('db');
    });
});
