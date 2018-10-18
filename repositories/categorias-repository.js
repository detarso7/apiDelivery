'use strict'

require('../model/categorias-model')
const mongoose = require('mongoose')
const categoriasModel = mongoose.model('Categorias')

class CategoriaRepositorio{
    constructor(){}

    async create(data){
        let categoria = new categoriasModel(data)
        let resultado = await categoria.save()
        return resultado
    }

    async updata(id, data){
        await categoriasModel.findByIdAndUpdate(id, { $set: data });
        let resultado = await categoriasModel.findById(id)
        return resultado
    }


    async getAll(){
        let lista = await categoriasModel.find()
        return lista
    }

    async getById(id){
        let categoriaEncontrada = await categoriasModel.findById(id)
        return categoriaEncontrada
    }

    async delete(id){
        let deletado = await categoriasModel.findByIdAndRemove(id)
        return deletado
    }
}

module.exports = CategoriaRepositorio;