const fastify = require('fastify')
const path = require('path');

/**
 * 
 * @param {*} options Options passed to Fastify.
 * @return {FastifyInstance} A Fastify instance of the app.
 */
function build(options={}) {
    const app = fastify(options);

    app.register(require('fastify-static'), {
        root: path.join(__dirname, "public")
    });
    app.register(require('point-of-view'), {
        engine: {handlebars: require('handlebars')},
        root: './templates',
        options: {
            partials: {
                header: './partials/header.hbs'
            }
        }
    });

    app.register(require('./routes/auth/login'));

    return app
}

module.exports = build
