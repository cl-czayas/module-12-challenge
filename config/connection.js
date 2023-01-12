const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 8889,
    password: 'root',
    database: 'employee_db'
})

module.exports = db;