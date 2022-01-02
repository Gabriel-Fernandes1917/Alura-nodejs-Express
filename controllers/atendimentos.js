const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')


module.exports = app =>{
    
    app.get('/atendimentos',(req, res) => {
        
       Atendimento.lista(res)

    })

    app.get('/atendimentos/:id', (req, res)=>{
        const id = parseInt(req.params.id)

        Atendimento.buscarPorId(id, res)
        
    })

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body)
        const atendimento = req.body
        
        Atendimento.adiciona(atendimento, res)
        
    })
}