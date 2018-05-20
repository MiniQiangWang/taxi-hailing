var socketio = {};  
var socket_io = require('socket.io');  

var express = require('express');
var router = express.Router();
var OrderDetails = require('../models/orderDetails');
var Drivers = require('../models/drivers');
var Users = require('../models/users');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/taxi');

var group = {};
//获取io  
socketio.getSocketio = function(server){  
    
    var io = socket_io.listen(server);  

    io.sockets.on('connection', function (socket) {  
        console.log('连接成功');

        // console.log(socket.id, '**********************');
        socket.on('click1',function(orderMessage){  
            group[orderMessage.userName] = socket.id;
            console.log('group',group);
            var orderParam = {
                o_id: new Date().getTime(),//订单号
                // o_id: "123",
                o_date: new Date().getFullYear() + '年' + (new Date().getMonth()+1) + '月' + new Date().getDate() + '日' + new Date().getHours() + '时' + new Date().getMinutes() + '分' + new Date().getSeconds() + '秒',//时间
                start_place: orderMessage.startPoint,//起始地点
                end_place: orderMessage.endPoint,//终点
                price:'',//价格
                driver:'',//司机名
                p_name: orderMessage.passagerName || '',//乘客名
                d_phone:'',//司机手机号
                p_phone: orderMessage.passagerPhone || '',//乘客手机号
                comment:'当前未评价',//评价信息
                car_model:'',//车型
                car_plate:'',//车牌号
                p_start_point: orderMessage.startPointNum,
                status: 'NOT_RECEIPT'
              }
              let orderDetails = new OrderDetails(orderParam);
                orderDetails.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    socket.emit('callCarSuccess', orderParam); 
                }
            })
    //   socket.broadcast.emit('click2',  {datas: datas});  
        })

        socket.on('setAccept', function (message) {
            group[message.msg] = socket.id;
            console.log('group',group);
            Drivers.findOne({d_userName:message.msg}, function (err, driver) {
                if(err) {
                }else {
                    var initPoint = message.initPoint;
                    function pointInsideCircle(cPoint, iPoint, r) {
                        if (r === 0) return false
                        var dx = parseInt(iPoint[1]) - cPoint.lat;
                        var dy = parseInt(iPoint[0]) - cPoint.lng;
                        return dx * dx + dy * dy <= r * r
                    }

                    OrderDetails.find({},function (err, orderList) {
                        if(err) { 
                            
                        }else {
                            var arr = orderList.filter(function (item, index) {
                                if(item.status === 'NOT_RECEIPT' && pointInsideCircle(initPoint, item.p_start_point.split(','), 100)) {
                                    return item;
                                }
                            })
                            function compare(property) {
                                return function(a,b){
                                    var value1 = a[property];
                                    var value2 = b[property];
                                    return parseInt(value1) - parseInt(value2);
                                }
                            }
                            arr.sort(compare('o_id'));
                            socket.emit('acceptOrder', arr);  
                        }
                    });
                    // var {car_model, car_plate, d_phone, d_name} = driver;
                    // OrderDetails.update();
                }
            });

        })

        socket.on('setAcceptOrder', function (acceptMsg) {
            OrderDetails.findOne({o_id: acceptMsg.o_id}, function (err, doc) {
                if(err) {

                }else {
                    if(doc) {
                        OrderDetails.update({o_id: acceptMsg.o_id},{
                            driver:acceptMsg.d_name,
                            d_phone:acceptMsg.d_phone,
                            car_model: acceptMsg.car_model,
                            car_plate:acceptMsg.car_plate,
                            status:'ACCEPTED_NOT_ARRIVED'
                        }, function (err) {
                            if(err) {
            
                            }else {
                                OrderDetails.findOne({o_id:acceptMsg.o_id}, function (err, doc) {
                                    if(err) {} else{
                                        socket.emit('getAcceptResult', doc);
                                        var order = doc;
                                        Users.findOne({personName:doc.p_name}, function (err, doc) {
                                            io.sockets.sockets[group[doc.userName]].emit('gotoGottenOrder', order);
                                        })
                                    }
                                })
                                
                            }
                        });
                    }else{
                        socket.emit('getAcceptResult', 'not_exist');
                    }
                }
                
            });
            
        });
        
        socket.on('setDeleteOrder', function (o_id) {
            OrderDetails.findOne({o_id:o_id}, function (err, doc) {
                if(err) {

                }else {
                    OrderDetails.remove({o_id:o_id}, function (err) {
                        if(err) {
                            
                        }else {
                            
                        }
                    });
                }
                
            })
            
        });

        socket.on('setStartStatus', function (o_id) {
            OrderDetails.findOne({o_id:o_id}, function (err, doc) {
                if(err) {}else{
                    OrderDetails.update({o_id:o_id},{status:'ARRIVED_AND_RUNNING'},function (err){
                        if(err) {}else{socket.emit('gotoArrived');}
                    });
                }
            })
        })
    })  
  
};  





  
module.exports = socketio;