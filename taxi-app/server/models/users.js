var mongoose = require('mongoose');
var Schema = mongoose.Schema;//表模型

var userLoginSchema = new Schema({
    userName: String,
    userPwd: String,
    userId: String,
    personName: String,
    sex: String,
    age: String,
    address: String,
    phone: String,
    occupation: String
});

module.exports = mongoose.model('User',userLoginSchema);