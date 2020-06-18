const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.')) // Permite o envio dos arquivos estaticos (html, javascript, css)
app.use(bodyParser.urlencoded({extended: true})) //Transforma submit em objeto
app.use(bodyParser.json()) // Configura os arquivos json recebidos

//app.get('/teste' , (req, res) => res.send('OK'))

const multer = require('multer') // Utilizado para upload de arquivos

const storage = multer.diskStorage({

    destination : function(req, file, callback){
        callback(null, './upload') //Indica o direótio onde é pra salvar
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //Renomeia o arquivo
    }
})

const upload = multer({storage}).single('arquivo') // "arquivo" é o mesmo nome dado para a tag "input" do html

//Requisição via post
app.post('/upload', (req, resp) => {
    upload(req, resp, err => {

        if (err) {
            return resp.end('Ocorreu um erro.')
        }

        resp.end('Concluído com sucesso.')
    })
})

app.listen(8080, () => console.log('Executando...'))

/* Para iniciar digitar no terminal npm start */