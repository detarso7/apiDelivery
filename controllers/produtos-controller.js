'use strict'

require('../model/produtos-model')
const repository = require('../repositories/produtos-repository')

function produtosController(){

};

produtosController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body)
    res.status(201).send(resultado)
};

produtosController.prototype.put = async (req, res) => {
    let resultado = await new repository().updata(req.params.id, req.body)
    res.status(202).send(resultado)
};

produtosController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll()
    res.status(200).send(lista)
};

produtosController.prototype.getById = async (req, res) => {
    let produtos = await new repository().getById(req.params.id)
    res.status(200).send(produtos)
};

produtosController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id)
    res.status(204).send(deletado)
};

module.exports = produtosController