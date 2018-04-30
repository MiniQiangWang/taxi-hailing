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
        msg: err.message,
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
        res.cookie("personName", doc.personName, {//向cookie写数据
          path: '/',
          maxAge: 1000*60
        });
        //req.session.user = doc;//获取用户信息
        res.json({
          status: "0",
          msg: "",
          result:{
            userName: doc.userName,
            personName: doc.personName
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
      result:req.cookies.personName || ''
    })
  }else{
    res.json({
      status:"1",
      msg: '未登录',
      result:''
    })
  }
})

router.post('/regist', function (req, res, next) {
  User.findOne({userName:req.body.userName}, function (err, doc) {
    if(doc) {
      res.json({
        status: '10',
        msg: '账号已存在',
      })
    }else {
      var param = {
        userId: Date.now() + '',
        userName: req.body.userName,
        userPwd: req.body.userPwd,
        personName: Date.now() + '',
        sex: '未填写',
        age: '未填写',
        address: '未填写',
        phone: '未填写',
        occupation: '未填写'
      }
      let user = new User(param);
      user.save(function (err) {
      if(err) {
        res.json({
          status: "1",
          msg: err.message,
        })
      }else {
        User.findOne({userName:req.body.userName}, function (err, doc) {
          if(err) {
            res.json({
              status:'1',
              msg: err.message
            })
          }else {
            res.json({
              status:'0',
              msg: '账号注册成功',
              result: doc.userName
            })
          }
        })
      }
    });
  }
})
  
  
})


module.exports = router;
