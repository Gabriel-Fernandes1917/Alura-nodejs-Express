const Atendimento = require('../models/atendimentos')


module.exports = app => {
    app.get('/atendimentos', (req, res)=> res.send('you are in rode the atendimento and doing GET')) // req = requisition, res = response

    app.post('/atendimentos', (req, res) =>{ 
        const atendimento = req.body
        
        Atendimento.add(atendimento)
        res.send('Post atendimento')

    })

}
