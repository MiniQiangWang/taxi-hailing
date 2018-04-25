var express = require('express');
var router = express.Router();
var User = require('../models/users.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/taxi');
/* GET users listing. */

router.post('/login', function (req, res, next) {
  var param = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  }

  console.log("11111",param.userName);
  User.findOne(param, function (err, doc) {
    if(err) {
      res.json({
        status: "1",
        msg: err.message
      })
    }else {
      if (doc) {
        res.cookie("userId", doc.userId, {//向cookie写数据
          path: '/',
          maxAge: 1000*60
        });
        res.cookie("userName", doc.userName, {//向cookie写数据
          path: '/',
          maxAge: 1000*60
        });
        //req.session.user = doc;//获取用户信息
        res.json({
          status: "0",
          msg: "",
          result:{
            userName: doc.userName
          }
        })
      }
    }
  });
})

router.post('/logout', function (req, res, next) {
  res.cookie("userId", "", {
    path:'/',
    maxAge: -1
  })
  res.json({
    status:"0",
    msg: '',
    result:''
  })
})

router.get('/checklogin', function (req, res, next) {
  if(req.cookies.userId) {
    res.json({
      status:"0",
      msg: '',
      result:req.cookies.userName || ''
    })
  }else{
    res.json({
      status:"1",
      msg: '未登录',
      result:''
    })
  }
})

module.exports = router;
