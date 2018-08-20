require('newrelic');
const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	user: '',
	password: '',
	database: 'review_db',
});

pool.connect()

module.exports = pool;
