
module.exports = app => {
    app.get('/atendimentos', (req, res)=> res.send('you are in rode the atendimento and doing GET')) // req = requisition, res = response

    app.post('/atendimentos', (req, res) =>{ 
        console.log(req.body)
        res.send('You here in roud the atendimento and do send POST')})
}