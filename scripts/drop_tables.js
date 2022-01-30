const db = require('../db/db');
const schema = require('../db/schema');
const logger = require('../lib/logger');

async function main() {
    try {
        await schema.drop_all_tables();
        await db.end();
    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
    
}

main();
