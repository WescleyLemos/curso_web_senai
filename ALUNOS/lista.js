const url = 'https://dados.ifpb.edu.br/dataset/d02eb6b8-5745-4436-ae22-ef1c182897d9/resource/61f5a0ad-642d-4580-ab62-1110318d0eea/download/alunos.json'
const axios = require('axios')
const cota = f => f.cota === 'Oriundo de escola pública, declarado PPI'
const curso = f => f.curso.nome == '001 - Técnico em Mineração Integrado - Campina Grande (CAMPUS CAMPINA GRANDE)'
const situacao = f => f.situacao == 'Transferido Externo'
axios.get(url).then(resposta => {

    const servidores = resposta.data
    module.exports.resultado = servidores.filter(cota).filter(curso).filter(situacao)
        // console.log(resultado)
})