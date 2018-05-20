var express = require('express');
var router = express.Router();
var Driver = require('../models/drivers.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/taxi');

router.post('/login', function (req, res, next) {
  var param = {
    d_userName: req.body.driverName,
    d_password: req.body.driverPwd
  }
  Driver.findOne(param, function (err, doc) {
    if(err) {
      res.json({
        status: "1",
        msg: err.message,
      })
    }else {
      if (doc) {
        res.cookie("driverId", doc.d_id, {//向cookie写数据
          path: '/',
          maxAge: 1000*60*60*24
        });
        //req.session.driver = doc;//获取用户信息
        res.json({
          status: "0",
          msg: "",
          result:{
            d_id: doc.d_id,
            d_userName: doc.d_userName,
            d_name: doc.d_name,
            d_sex: doc.d_sex,
            d_address: doc.d_address,
            d_phone: doc.d_phone,
            d_age: doc.d_age,
            d_license: doc.d_license,
            ID_number: doc.ID_number,
            car_model: doc.car_model,
            car_plate: doc.car_plate,
            d_company: doc.d_company
          }
        })
      }else {
        res.json({
          status: "-1",
          msg: '没有数据',
          result:''
        })
      }
    }
  });
});

router.post('/dregist', function (req, res, next) {
  console.log(req.body.driverName, "name");
  Driver.findOne({d_userName:req.body.driverName}, function (err, doc) {
    if(doc) {
      console.log(doc, "账号已存在");
      res.json({
        status: '11',
        msg: '账号已存在',
      })
    }else {
      var newDate = new Date();
      var param = {
        d_id: ''+ newDate.getFullYear() + (newDate.getMonth()+1) + newDate.getDay(),
        d_userName: req.body.driverName,
        d_password: req.body.driverPwd,
        d_name: '张三',
        d_sex: '',
        d_address: '',
        d_phone: '',
        d_age: '',
        d_license: '',
        ID_number: '',
        car_model:'',
        car_plate:'',
        d_company: ''
      }
      let driver = new Driver(param);
      driver.save(function (err) {
        
      if(err) {
        console.log(err, "走到这里了");
        res.json({
          status: "1",
          msg: err.message,
        })
      }else {
        console.log( "ta走到这里了");
        Driver.findOne({d_userName:req.body.driverName}, function (err, doc) {
          if(err) {
            res.json({
              status:'1',
              msg: err.message
            })
          }else {
            res.json({
              status:'00',
              msg: '账号注册成功',
              result: doc.d_userName
            })
          }
        })
      }
    });
  }
})
})

router.post('/logout', function (req, res, next) {
  res.cookie("driverId", "", {
    path:'/',
    maxAge: -1
  })
  res.json({
    status:"0",
    msg: '',
    result:''
  })
})

router.post('/checklogin', function (req, res, next) {
  console.log(req.cookies.driverId);
  if(req.cookies.driverId) {
    Driver.findOne({d_id:req.cookies.driverId}, function (err, doc) {
      console.log('dododd');
      if(err) {
        console.log('here');
        res.json({
          status:'1',
          msg: err.message,
          result:''
        })
      }else {
        
        res.json({
          status:'0',
          msg: '',
          result: {
            d_id: doc.d_id,
            d_userName: doc.d_userName,
            d_name: doc.d_name,
            d_sex: doc.d_sex,
            d_address: doc.d_address,
            d_phone: doc.d_phone,
            d_age: doc.d_age,
            d_license: doc.d_license,
            ID_number: doc.ID_number,
            car_model: doc.car_model,
            car_plate: doc.car_plate,
            d_company: doc.d_company
          }
        })
      }
    })
  }else{
    res.json({
      status:"1",
      msg: '未登录',
      result:''
    })
  }
})

router.post('/update', function (req,res,next) {
  Driver.findOne({d_userName:req.body.d_userName}, function (err, doc) {
    if(err) {
      res.json({
        status:'1',
        msg: 'cuocuocuo',
        result:''
      })
    }else {
      Driver.update({d_userName: req.body.d_userName}, req.body.valueMsg, function (err) {
        if(err) {
          res.json({
            status:'02',
            msg:err.message
          });
        }else {
          res.json({
            status:'0',
            msg:'update success',
            result:''
          })
        }
      })
    }
  })
})

module.exports = router;