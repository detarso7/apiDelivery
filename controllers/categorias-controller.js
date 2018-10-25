'use strict'
const repository = require('../repositories/categorias-repository')
const validation = require('../bin/helpers/validation')
const ctrlBase = require('../bin/base/controller-base')
const _repo = new repository()

function categoriaController(){

};

categoriaController.prototype.post = async (req, res) => {

    let _validationContract = new validation()

    _validationContract.isRequired(req.body.titulo, 'Informe um titulo para a categoria')
    _validationContract.isRequired(req.body.foto, 'Insira uma foto para a categoria')
    ctrlBase.post(_repo, _validationContract, req, res)

};

categoriaController.prototype.put = async (req, res) => {
    let _validationContract = new validation()

    _validationContract.isRequired(req.body.titulo, 'Informe um titulo para a categoria')
    _validationContract.isRequired(req.body.foto, 'Insira uma foto para a categoria')
    _validationContract.isRequired(req.params.id, 'O ID que será utilizado é obrigatório')

    ctrlBase.put(_repo, _validationContract, req, res)
};

categoriaController.prototype.get = async (req, res) => {
    _repo.getAll(_repo, req, res)
};

categoriaController.prototype.getById = async (req, res) => {
    _repo.getById(_repo, req, res)
};

categoriaController.prototype.delete = async (req, res) => {
    _repo.delete(_repo, req, res)
};

module.exports = categoriaController