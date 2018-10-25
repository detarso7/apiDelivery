'use strict'
const repository = require('../repositories/usuarios-repository')
const validation = require('../bin/helpers/validation')
const ctrlBase = require('../bin/base/controller-base')
const _repo = new repository()
const md5 = require('md5')
const jwt = require('jsonwebtoken')
const variables = require('../bin/configuration/variable')

function usuariosController(){

}

usuariosController.prototype.post = async (req, res) => {
    let _validationContract = new validation()

    _validationContract.isRequired(req.body.nome, 'Informe seu nome')
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail')
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido')
    _validationContract.isRequired(req.body.senha, 'Informe sua senha')
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatória')
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A senha de confirmação deve ser igual a senha informada')

    let usuarioIsEmailExiste = await _repo.isEmailExiste(req.body.email)
    if(usuarioIsEmailExiste){
        _validationContract.isTrue(usuarioIsEmailExiste != undefined, `Já existe o email ${req.body.email} em nosso cadastro.`)
    }

    req.body.senha = md5(req.body.senha)

    ctrlBase.post(_repo, _validationContract, req, res)

}

usuariosController.prototype.put = async (req, res) => {

    let _validationContract = new validation()

    _validationContract.isRequired(req.body.nome, 'Informe seu nome')
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail')
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido')
    _validationContract.isRequired(req.params.id, 'Informe o ID do usuário')

    let usuarioIsEmailExiste = await _repo.isEmailExiste(req.body.email)
    if(usuarioIsEmailExiste){
        _validationContract.isTrue(
            usuarioIsEmailExiste.nome != undefined &&
            usuarioIsEmailExiste._id != undefined,
            `Já existe o email ${req.body.email} em nosso cadastro.`)
    }

    ctrlBase.put(_repo, _validationContract, req, res)
}

usuariosController.prototype.get = async (req, res) => {
ctrlBase.get(_repo, req, res)
}

usuariosController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res)

}

usuariosController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res)

}

usuariosController.prototype.autenticar = async (req, res) => {
    let _validationContract = new validation()

    _validationContract.isRequired(req.body.email, 'Informe seu email')
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido')
    _validationContract.isRequired(req.body.senha, 'Informe sua senha')

    if(!_validationContract.isValid){
        res.status(400).send({message:'Não foi possível efetuar seu login', validation:_validationContract.errors()})
    }
       
    let usuarioEncotrado = await _repo.authentication(req.body.email, req.body.senha)
    if (usuarioEncotrado){
        res.status(200).send({
            usuario: usuarioEncotrado,
            token: jwt.sign({user: usuarioEncotrado}, variables.security.secretKey)
        })
    }else{
        res.status(404).send({message: 'Usuário e senha não são válidos'})
    }
}

module.exports = usuariosController