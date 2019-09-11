const bodyParser = require('body-parser');

const express = require('express');
const app = express();


app.use(express.static("."));//dentro do diretorio atual sirva todos os arquivos estáticos

app.use(bodyParser.urlencoded({ extended: true }));//usado para converter dados de formulário...

app.use(bodyParser.json()); //usado para transformar json em informa~ções tratáveis no servidor

app.get('/teste', (req, res) => res.send('Ok!'));



const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})


const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro no envio do arquivo')
        } else { res.end('Concluído com sucesso"') }
    })
})

app.listen(8080, () => console.log('executando...'));