'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtosModel = new schema({
    nome:{type: String, required: true, index: true, trim: true},
    descricao: {type: String, required: true},
    preco:{type: Number, required: true, default: 0},
    foto: {type: String, required: true},
    ativa: {type: Boolean, required: true, default: true},
    dataCriação: {type: Date, default: Date.now}
}, {versionKey: false})

produtosModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriação)
    this.dataCriação = agora;
    next();
});

module.exports = mongoose.model('Produtos', produtosModel)