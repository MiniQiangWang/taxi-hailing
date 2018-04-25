var mongoose = require('mongoose');
var Schema = mongoose.Schema;//表模型

var userLoginSchema = new Schema({
    "userName": String,
    "userPwd": String,
    "userId": String
});

module.exports = mongoose.model('Users',userLoginSchema);