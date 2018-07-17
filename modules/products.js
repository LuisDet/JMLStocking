'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const productSchema = schema({
    name: String,
    price: Number,
    category: String,
    description: String
})

module.exports = mongoose.model('Product', productSchema)
