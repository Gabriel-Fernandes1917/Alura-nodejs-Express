const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(error =>{
    if(error){
        console.log(error)
    }else{
        console.log("mission Passed SLQ + respect")

        Tabelas.init(conexao)

        const app = customExpress()
        
        app.listen(300, ()=> console.log('server ON'))
    }
})

