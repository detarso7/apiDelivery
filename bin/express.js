const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const variables = require('../bin/configuration/variable')

//importando routers
const categoriaRouter = require('../routes/categorias-routes')
const produtosRouter = require('../routes/produtos-routes')
const usuariosRouter = require('../routes/usuarios-routes')


//Criando/Invocando a Api/Server Web do Express
const app = express();

//Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Configuração de conecção com o banco de dados

mongoose.connect(variables.Database.connection, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);


//Configurando as rotas
app.use('/api/categorias', categoriaRouter);
app.use('/api/produtos', produtosRouter);
app.use('/api/usuarios', usuariosRouter);


//Exportando nossa Api
module.exports = app;