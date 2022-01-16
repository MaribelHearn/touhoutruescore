const fastify = require('fastify')({
    logger: true
});
const port = 3000;

fastify.register(require('fastify-static'), {
    root: __dirname
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
