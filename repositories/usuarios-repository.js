'use strict'

require('../model/usuarios-model')
const base = require('../bin/base/repository-base')
const md5 = require('md5')

class UsuariosRepositorio{
    constructor(){
        this._base = new base('Usuarios')
        this.projection = 'nome email _id'
    }

    async isEmailExiste(Email){
        return await this._base._model.findOne({email: Email}, this.projection)
    }

    async authentication(Email, Senha){
        let _hashSenha = md5(Senha)
        return await this._base._model.findOne({email: Email, senha: _hashSenha}, this.projection)
    }

    async create(data){
        let usuarioCriado = await this._base.create(data)
        return this._base._model.findById(usuarioCriado._id, this.projection)
    }

    async updata(id, data){
        let usuarioAtualizado = await this._base.updata(id, {
            nome: data.nome,
            email: data.email,
            foto: data.foto
        })
        return  this._base._model.findById(usuarioAtualizado._id, this.projection)
    }

    async getAll(){
        return await this._base._model.find({}, this.projection)
    }

    async getById(id){
        return await this._base._model.findById(id, 'nome email _id foto')
    }

    async delete(id){
        return await this._base.delete(id)
    }
}

module.exports = UsuariosRepositorio