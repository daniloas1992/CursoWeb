const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.')) // Permite o envio dos arquivos estaticos (html, javascript, css)
app.use(bodyParser.urlencoded({extended: true})) //Transforma submit em objeto
app.use(bodyParser.json()) // Configura os arquivos json recebidos

app.get('/teste' , (req, res) => res.send('OK'))

app.listen(8080, () => console.log('Executando...'))

/* Para iniciar digitar no terminal npm start */