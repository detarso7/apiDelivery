'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtosModel = new schema({
    nome:{type: String, required: true, index: true, trim: true},
    descricao: {type: String},
    preco:{type: Number},
    foto: {type: String, required: true},
    ativa: {type: Boolean},
    dataCriação: {type: Date, default: Data.now}
}, {versionKey: false})

produtosModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriação)
    this.dataCriação = agora;
    next();
});

module.exports = mongoose.model('produtos', produtosModel)