// sent things to sql
const moment = require('moment')// momente work with date
const atendimentos = require('../controllers/atendimentos')
const conexao = require('../infraestrutura/conection')

class Atendimentos {
    add(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')//year-moth-day hours:minutes:seconds
        const atendimentoDatado = {...atendimento, dataCriacao, data} 
        
        const sql = 'INSERT INTO Atendimentos SET ?' // ? is what add in here go to table

        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if(erro){

                console.log(erro)
            }else{
                console.log(resultado)
            }
        })
    }
}

module.exports = new Atendimentos