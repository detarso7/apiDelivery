'use strict'

require('../model/categorias-model')
const base = require('../bin/base/repository-base')

class CategoriaRepository{
    constructor(){
        this._base = new base('Categorias')
    }

    async create(data){
        return await this._base.create(data)        
    }

    async updata(id, data){
        return  await this._base.updata(id, data);
    }

    async getAll(){
        return await this._base.getAll()
    }

    async getById(id){
        return await this._base.getById(id)
    }

    async delete(id){
        return await this._base.delete(id)
    }
}

module.exports = CategoriaRepository;