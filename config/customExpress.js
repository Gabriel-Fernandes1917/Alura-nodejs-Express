const express = require('express'); // call module express
const consign = require('consign'); // consign agroup the rouds the outhers folders, to install consign you need exe the comand npm install consign
//const bodyParser = require('body-parser') // get databse the body

module.exports = () => {
    const app = express();
    
    app.use(express.urlencoded({extended: true})) // POST 
    app.use(express.json()) // can see with json

    consign() // run consign
        .include('controllers')
        .into(app)

    return app;
}
