const express = require("express")
const res = require("express/lib/response")

const app = express()



app.listen(300, ()=> console.log('server ON'))

app.get('/atendimentos',(req, res) => res.send('atendimentos ola'))