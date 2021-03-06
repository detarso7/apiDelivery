'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const usuariosModel = new schema({
    nome: {trim: true, index: true, required: true, type: String},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    foto: {type: String},
    ativa: {type: Boolean, required: true},
    dataCriação: {type: Date, default: Date.now}
}, {versionKey: false});

usuariosModel.pre('save', next =>{
    let agora = new Date
    if (!this.dataCriação)
    this.dataCriação = agora
    next();
})

module.exports = mongoose.model('Usuarios', usuariosModel)