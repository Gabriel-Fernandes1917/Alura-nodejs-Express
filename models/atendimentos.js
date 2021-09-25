// sent things to sql
const conexao = require('../infraestrutura/conection')

class Atendimentos {
    add(atendimento){
        const sql = 'INSERT INTO Atendimentos SET ?' // ? is what add in here go to table

        conexao.query(sql, atendimento, (erro, resultado) => {
            if(erro){

                console.log(erro)
            }else{
                console.log(resultado)
            }
        })
    }
}

module.exports = new Atendimento