'use strict'

const repository = require('../repositories/produtos-repository')
const validation = require('../bin/helpers/validation')
const ctrlBase = require('../bin/base/controller-base')
const _repo = new repository()

function produtosController(){

}

produtosController.prototype.post = async (req, res) => {
    let _validationContract = new validation()

    _validationContract.isRequired(req.body.nome, 'Informe um nome para o produto')
    _validationContract.isRequired(req.body.foto, 'Insira uma foto para o produto')
    _validationContract.isRequired(req.body.descricao, 'Insira uma foto para o produto')
    _validationContract.isRequired(req.body.preco, 'O preço é obrigatório')
    
    if(req.body.preco){
    _validationContract.isTrue(req.body.preco == 0, 'O preço deve ser maior que zero')
}

    ctrlBase.post(_repo, _validationContract, req, res)
}

produtosController.prototype.put = async (req, res) => {
    let _validationContract = new validation()

    _validationContract.isRequired(req.body.nome, 'Informe um nome para o produto')
    _validationContract.isRequired(req.body.foto, 'Insira uma foto para o produto')
    _validationContract.isRequired(req.body.descricao, 'Insira uma foto para o produto')
    _validationContract.isRequired(req.body.preco, 'O preço é obrigatório')
    
    if(req.body.preco){
    _validationContract.isTrue(req.body.preco == 0, 'O preço deve ser maior que zero')
}

    ctrlBase.put(_repo, _validationContract, req, res)
}

produtosController.prototype.get = async (req, res) => {
ctrlBase.get(_repo, req, res)
}

produtosController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res)

}

produtosController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res)

}

module.exports = produtosController