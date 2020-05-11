require('dotenv').config();
const { Client } = require('pg');

class PG {

    constructor() {
        if (process.env.SSL) {
            this.client = new Client({
                connectionString: process.env.DATABASE_URL
            });
        } else {
            this.client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: { rejectUnauthorized: false }
            });
        }
        
        this.client.connect();
    }

    async getActivities(callback) {
        await this.client.query('SELECT * FROM activities', (error, results) => {
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

module.exports = PG;