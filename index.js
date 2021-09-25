const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conection')
const tables = require('./infraestrutura/tables')
const teables = require('./infraestrutura/tables')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('connection ON')

        tables.init(conexao)
        
        const app = customExpress();
        
        app.listen(3000,()=> console.log('Server on in port 3000')); // set port
    }
})

