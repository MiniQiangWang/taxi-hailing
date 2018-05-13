var mongoose = require('mongoose');
var Schema = mongoose.Schema;//表模型

var productSchema = new Schema({
    "productName":String,
    "productId":String,
    "salePrice":Number,
    "productImage":String
});

module.exports = mongoose.model('Goods',productSchema);