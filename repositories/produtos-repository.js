'use strict'

require('../model/produtos-model')
const mongoose = require('mongoose')
const produtosModel = mongoose.model('Produtos')

class ProdutosRepositorio{
    constructor(){}

    async create(data){
        let categoria = new produtosModel(data)
        let resultado = await categoria.save()
        return resultado
    }

    async updata(id, data){
        await produtosModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await produtosModel.findById(id);
        return resultado
    }


    async getAll(){
        let lista = await produtosModel.find()
        return lista
    }

    async getById(id){
        let categoriaEncontrada = await produtosModel.findById(id)
        return categoriaEncontrada
    }

    async delete(id){
        let deletado = await produtosModel.findByIdAndRemove(id)
        return deletado
    }
}

module.exports = ProdutosRepositorio;