const bodyParser = require('body-parser');

const express = require('express');
const app = express();


app.use(express.static("."));//dentro do diretorio atual sirva todos os arquivos estáticos

app.use(bodyParser.urlencoded({ extended: true }));//usado para converter dados de formulário...

app.use(bodyParser.json()); //usado para transformar json em informa~ções tratáveis no servidor

app.get('/teste', (req, res) => res.send('Ok!'));

app.listen(8080, () => console.log('executando...'));