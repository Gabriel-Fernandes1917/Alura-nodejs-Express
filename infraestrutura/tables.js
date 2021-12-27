//This code check if table exist or not, and if not exist her create one

const { text } = require("body-parser")
const conexao = require("./conection")

class tables {
    init(conection) {
        this.conection = conexao
        
        this.CreateAtendimentos()

    }

    CreateAtendimentos() {
        
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, datatime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conection.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log("teable crated with sucefy")
            }
        })
    }
}

module.exports = new tables