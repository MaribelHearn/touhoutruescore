/**
 * A class that defines the local environment.
 * 
 * This class primarily exists to make it more convenient to access the local 
 * environment from config.js.
 */
class Environment {
    /**
     * 
     * @param {process.env} env The local environment.
     */
    Environment(env) {
        // The address of the postgres server to use.
        this.postgres_host = env['PGHOST'];
        this.postgres_port = env['PGPORT'];

        // The username with which to connect to postgres.
        this.postgres_user = env['PGUSER'];

        // The password with which to connect to postgres.
        this.postgres_pass = env['PGPASSWORD'];

        // The name of the database.
        this.database = env['PGDATABASE'];

        Object.freeze(this);
    }
}

module.exports = Environment;
