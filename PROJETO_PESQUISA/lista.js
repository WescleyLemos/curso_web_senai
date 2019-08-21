const url = 'https://dados.ifpb.edu.br/dataset/e99b5cfd-f2f3-4b54-bb4f-6ddd9e480af7/resource/f81de6aa-afde-4cdb-bee0-a9ed2f87c4c3/download/projetos-pesquisa.json'
const axios = require('axios')
const areaConhecimento = f => f.area_conhecimento === 'ENGENHARIA ELÉTRICA'
const modalidade = f => f.resumo === 'Modalidade Segue Faixa'

axios.get(url).then(resposta => {
    const servidores = resposta.data
    module.exports.resultado = servidores.filter(areaConhecimento).filter(modalidade)
        // console.log(resultado);

})