'use strict'

const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
res.status(200).send('funcionando perfeitamente!')
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router