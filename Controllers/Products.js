'use strict'

const Product = require('../modules/products')

function getProduct (req, res){

    const product = Product.findById(req.params.productId)
    res.json(product)
}

function getProducts(req, res){
    Product.find({}, (err, products)=>{
        if(err) return res.status(500).send({message: `Error al realizar la perticion ${err}`})
        if(!products) return res.status(404).send({message: `No existen productos`})
    
        res.status(200).send({products})
    })
}

function postProducts(req, res){
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, productStored) =>{
        if(err) res.status(500).send({ message : `Error al salvar en la base de datos: ${err}`})
        
        res.status(200).send({product: productStored})
    })
}

function updateProduct(req, res){
    let productId = req.params.productId
    let update = req.body

    Product.findByIdAndUpdate(productId, update, (err, productUpdate)=>{
        if (err) res.status(500).send({message: `Error al actulizar el producto: ${err}`})
         res.status(200).send({message: 'El producto ha sido actualizado'})

    })
}

function deleteProduct(res, req){
    let productId = req.params.productId

    Product.findById(productId, (err, product)=>{
        if (err) res.status(500).send({message: `Error al borrar el producto: ${err}`})

        product.remove(err =>{
            if (err) res.status(500).send({message: `Error al borrar el producto ${err}`})

            res.status(200).send({message: 'El producto ha sido eliminado'})
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    postProducts,
    updateProduct,
    deleteProduct
}