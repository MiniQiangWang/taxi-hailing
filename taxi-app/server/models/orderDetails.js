var mongoose = require('mongoose');
var Schema = mongoose.Schema;//表模型

var productSchema = new Schema({
    o_id:String,//订单号
    o_date:String,//时间
    start_place:String,//起始地点
    end_place:String,//终点
    price:String,//价格
    driver:String,//司机名
    p_name:String,//乘客名
    d_phone:String,//司机手机号
    p_phone:String,//乘客手机号
    comment:String,//评价信息
    car_model:String,//车型
    car_plate:String,//车牌号
    p_start_point:String,//乘客坐标点
    status:String//订单状态
});

module.exports = mongoose.model('Orderdetails',productSchema);