require('dotenv').config();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'beesocial',
    port: process.env.DB_PORT,
    timeout: 3 * 1000
});

class Dao {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: 'beesocial',
            port: process.env.DB_PORT,
            timeout: 3 * 1000
        });
    }

    connect() {
        this.connection.connect();
    }

    async getActivities(callback) {
        await this.connection.query('SELECT * FROM activities', function (error, results, fields) {
            if (error) throw error;
            return callback(results);
        });
    }

    async findOrCreateUser(user, callback) {
        if (user.provider == 'google') {
        }
        else throw 'Unsupported login provider';
    }
}

module.exports = Dao;