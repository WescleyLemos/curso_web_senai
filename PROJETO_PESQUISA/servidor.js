const porta = 3003
const express = require('express')
const app = express()
const filtro = require('./lista')
const bodyParser = require('body-parser')
    // GERENCIAMENTO DE ACESSO CORS – compartilhamento/permissões
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content - Type, Accept ');
    next();
});
//FUNÇÃO PARA ACESSO DOS FILTROS
app.get('/', function(req, res, next) {
    res.send(filtro.resultado);
});
// CONFIGURAÇÃO DE FUNCIOAMENTO DO APP NA PORTA 3003, CONFORME LINHA 1.
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})