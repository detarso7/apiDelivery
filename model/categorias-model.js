'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoriaModel = new schema({
    titulo: {trim: true, index: true, required: true, type: String},
    descricao: {type: String},
    foto: {type: String, required: true},
    ativa: {type: Boolean},
    dataCriação: {type: Date, default: Data.now}
}, {versionKey: false});

categoriaModel.pre('save', next =>{
    let agora = new Date;
    if (!this.dataCriação)
    this.dataCriação = agora;
    next();
})

module.exports = mongoose.model('categorias', categoriaModel)