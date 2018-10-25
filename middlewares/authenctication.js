'use strict'

const jwt = require('jsonwebtoken')
const variables = require('../bin/configuration/variable')

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers ['x-access-token']
    if (token){

        try {
            let decoded = jwt.verify(token, variables.security.secretKey)
            console.log(decoded)
            req.usuarioLogado = decoded
            next()
        } catch (error) {    
            res.status(401).send({message:'Token informado é inválido'})
        }
    
    }else{
        res.status(401).send({message:'Você precisa de um token para acessar este recurso'})
        return
    }
}