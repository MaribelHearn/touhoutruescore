const fastify = require('fastify')({
    logger: true
});
const path = require('path');
const port = 3000;

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, "public")
});

async function StartListening() {
    try {
        await fastify.listen(port);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

StartListening();
