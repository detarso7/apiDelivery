'use strict'
const repository = require('../repositories/usuarios-repository')
const _repo = new repository()

function usuariosController(){

};

usuariosController.prototype.post = async (req, res) => {
    let resultado = await _repo.create(req.body)
    res.status(201).send(resultado)
};

usuariosController.prototype.put = async (req, res) => {
    let resultado = await _repo.updata(req.params.id, req.body)
    res.status(202).send(resultado)
};

usuariosController.prototype.get = async (req, res) => {
    let lista = await _repo.getAll()
    res.status(200).send(lista)
};

usuariosController.prototype.getById = async (req, res) => {
    let categoria = await _repo.getById(req.params.id)
    res.status(200).send(categoria)
};

usuariosController.prototype.delete = async (req, res) => {
    let deletado = await _repo.delete(req.params.id)
    res.status(204).send(deletado)
};

module.exports = categoriaController