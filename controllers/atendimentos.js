const Atendimento = require('../models/atendimentos')


module.exports = app =>{
    
    app.get('/atendimentos',(req, res) => res.send('you stay in atendimentos and doing GET'))

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)
        const atendimento = req.body
        
        Atendimento.adiciona(atendimento, res)
        
    })
}