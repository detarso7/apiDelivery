'use strict'
require('../model/categorias-model')
const mongoose = require('mongoose')
const categorias = mongoose.model('Categorias')

function categoriaController(){

};

categoriaController.prototype.post = async (req, res) => {
    let model = new categorias(req.body)
    let resultado = await model.save()
    res.status(201).send(resultado)
};

categoriaController.prototype.put = async (req, res) => {
    await categorias.findByIdAndUpdate(req.params.id, {$set: req.body});
    let categoriaEncontrada = await categorias.findById(req.params.id);
    res.status(202).send(categoriaEncontrada)
};

categoriaController.prototype.get = async (req, res) => {
    let lista = await categorias.find()
    res.status(200).send(lista)
};

categoriaController.prototype.getById = async (req, res) => {
    let categoriaEncontrada = await categorias.findById(req.params.id)
    res.status(200).send(categoriaEncontrada)
};

categoriaController.prototype.delete = async (req, res) => {
    let deletado = await categorias.findByIdAndRemove(req.params.id)
    res.status(204).send(deletado)
};

module.exports = categoriaController