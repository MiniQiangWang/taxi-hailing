var mongoose = require('mongoose');
var Schema = mongoose.Schema;//表模型

var feedBackSchema = new Schema({
    userName:String,
    feedText: String,
    date: String,
    length: Number
});

module.exports = mongoose.model('Feedbacks',feedBackSchema);