const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso!')
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) =>{
    res.render('index')
})

app.get("/perguntar", (req, res) => {
    res.render('perguntar')
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    res.send('Titulo: ' + titulo + 'Descrição: ' + descricao)
})

app.listen(8081, () => {
    console.log('Servidor rodando corretamente')
})