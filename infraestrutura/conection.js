const mysql = require('mysql') // import mysql

const conexao = mysql.createConnection({

    //config the database
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao