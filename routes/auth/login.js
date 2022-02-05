'use strict';

async function routes(fastify) {
    fastify.get('/login', async (request, reply) => {
        return reply.view('./auth/login.hbs', {
            hello: 'hi'
        });
    });
}

module.exports = routes
