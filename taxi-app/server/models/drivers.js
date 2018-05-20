var mongoose = require('mongoose');
var Schema = mongoose.Schema;//表模型

var userLoginSchema = new Schema({
    d_id: String,
    d_userName: String,
    d_password: String,
    d_name: String,
    d_sex: String,
    d_address: String,
    d_phone: String,
    d_age: String,
    d_license: String,
    ID_number: String,
    car_model:String,
    car_plate:String,
    d_company: String
});

module.exports = mongoose.model('Drivers',userLoginSchema);