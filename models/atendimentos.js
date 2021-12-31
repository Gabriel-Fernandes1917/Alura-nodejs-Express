//send to us data base
//const atendimentos = require('../controllers/atendimentos')
const moment = require('moment')//lib the date
const conexao = require('../infraestrutura/conexao')


class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)// if date is same or after
        const clienteEhValido = atendimento.cliente.length >= 4

        const validacoes = [
            {
                nome: data,
                valido: dataEhValida,
                mensagem: 'Data deve ser maior do que a atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos 4 letras'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else{
            res.status(201).json(resultados)
        }

        
    }
}

module.exports = new Atendimento