const express = require('express'); //importacao do pacote
const app = express(); //instanciando express
const cors = require('cors');

const jsonData = require('../customers.json');

app.use(cors()) //habilitando cors na nossa aplicacao

app.get('/frontend', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send(jsonData)
})

app.listen(3000) //execucao do servidor