const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:
    {
        type:String
    },
    price:
    {
        type:Number
    },
    imageUrl:
    {
        type:String
    },
    productUrl:
    {
        type:String
    } 
})

module.exports = mongoose.model('Product', productSchema)