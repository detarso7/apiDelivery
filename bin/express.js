const express = require('express');
const bodyParser = require('body-parser');

//importando routers
const categoriaRouter = require('../routes/categorias-routes')
const produtosRouter = require('../routes/produtos-routes')

//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Configurando as rotas
app.use('/api/categorias', categoriaRouter);
app.use('/api/produtos', produtosRouter);

//Exportando nossa Api
module.exports = app;