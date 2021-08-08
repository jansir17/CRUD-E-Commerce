const Product = require('../models/product')

exports.findAll = async(req, res) =>{
    const products = await Product.find()
    res.send(products)
}