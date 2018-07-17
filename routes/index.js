'use strict'

const express = require('express')
const productsCtrl = require('../Controllers/Products')
const auth = require('../middleware/auth')
const api = express.Router()
//const cors = require ('cors')

//const configurationOptions = {
   // methods: ['POST'],
   // origin : 'http://localhost/4200'
//}

api.get('/product',productsCtrl.getProducts)
api.get('/product/:productId',productsCtrl.getProduct)
api.post('/product', productsCtrl.postProducts)
api.put('/product/:productId', productsCtrl.updateProduct)
api.delete('/product/:productId',productsCtrl.deleteProduct)
api.get('/private',auth, (req, res) => {
    res.status(200).send({message:'Tienes acceso'})
})

module.exports = api