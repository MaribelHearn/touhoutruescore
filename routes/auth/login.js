const handlebars = require('handlebars');

async function routes(fastify, options) {
    fastify.get('/login', async (request, reply) => {
        return reply.view('./auth/login.hbs', {
            hello: 'hi'
        });
    });
}

module.exports = routes
