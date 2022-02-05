'use strict';

const db = require('../db/db');

afterAll(async () => {
    await db.end();
});