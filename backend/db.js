const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "thongminh135",
    host: "localhost",
    port: 5432,
    database: "vnergy-database"
});

module.exports = pool;