const mysql = require('mysql') // import mysql

const conexao = mysql.createConnection({

    //config the database
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

module.exports = conexao