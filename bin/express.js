const express = require('express');
const bodyParser = require('body-parser');

const categoriaRouter = require('../routes/categorias-routes')

const app = express();
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/categorias', categoriaRouter);

module.exports = app;