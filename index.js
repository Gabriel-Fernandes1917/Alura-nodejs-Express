const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conection')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('connection ON')
    }
})
const app = customExpress();

app.listen(3000,()=> console.log('Server on in port 3000')); // set port

