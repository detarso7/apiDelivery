'use strict'

function produtosController(){

}

produtosController.prototype.post = async (req, res) => {};

produtosController.prototype.put = async (req, res) => {};

produtosController.prototype.get = async (req, res) => {
    res.status(200).send('Listando os Produtos...')
};
produtosController.prototype.getById = async (req, res) => {
    res.status(200).send(`Pegou o id: ${req.params.id}`)
};
produtosController.prototype.delete = async (req, res) => {};

module.exports = produtosController