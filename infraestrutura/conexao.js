const mysql = require('mysql2')

const conexao = mysql.createConnection({
    // object with info the connection
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao