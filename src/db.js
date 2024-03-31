const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "food_delivery",
    password: "shetty123",
    port: 5432,
});

module.exports = pool;
