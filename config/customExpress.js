const express = require("express")
const consign = require('consign')

module.exports = () =>{

    const app = express()
    
    app.use(express.urlencoded({extended: true})) // type the post
    app.use(express.json())
    consign()
        .include('controllers') // flooter
        .into(app) // add controllers into app

    return app
}

