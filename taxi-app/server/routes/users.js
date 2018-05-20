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
          maxAge: 1000*60*60*24
        });
        //req.session.user = doc;//获取用户信息
        res.json({
          status: "0",
          msg: "",
          result:{
            userId:doc.userId,
            userName:doc.userName,
            personName:doc.personName,
            sex:doc.sex,
            age:doc.age,
            address:doc.address,
            phone:doc.phone,
            occupation:doc.occupation,
            discription:doc.discription
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

router.post('/checklogin', function (req, res, next) {
  if(req.cookies.userId) {
    User.findOne({userId:req.cookies.userId}, function (err, doc) {
      if(err) {
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
            userId:doc.userId,
            userName:doc.userName,
            personName:doc.personName,
            sex:doc.sex,
            age:doc.age,
            address:doc.address,
            phone:doc.phone,
            occupation:doc.occupation,
            discription:doc.discription
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

router.post('/regist', function (req, res, next) {
    User.findOne({userName:req.body.userName}, function (err, doc) {
      if(doc) {
        res.json({
          status: '10',
          msg: '账号已存在',
        })
      }else {
        var newDate = new Date();
        var param = {
          userId: new Date() + '',
          userName: req.body.userName,
          userPwd: req.body.userPwd,
          personName: '用户_'+ newDate.getFullYear() + (newDate.getMonth()+1) + newDate.getDay() + req.body.userName,
          sex: '',
          age: '',
          address: '',
          phone: '',
          occupation: '',
          discription: ''
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

router.post('/update', function (req,res,next) {
  User.findOne({userName:req.body.userName}, function (err, doc) {
    if(err) {
      res.json({
        status:'1',
        msg: 'cuocuocuo',
        result:''
      })
    }else {
      User.update({userName: req.body.userName}, req.body.valueMsg, function (err) {
        if(err) {
          res.json({
            status:'02',
            msg:err.message
          });
        }else {
          User.findOne({personName: req.body.valueMsg.personName},function (err, doc) {
            console.log(doc.personName);
            console.log(req.body.valueMsg.personName)
            if(doc.personName !== req.body.valueMsg.personName) {
              res.json({
                status:'0',
                msg:'success',
                result: doc
              })
              
            }else {
              res.json({
                status:'0',
                msg: '没更新成功',
                result:''
              })
            }
          })
        }
      })
    }
  })
})

// router.post('/update', function (req,res,next) {
  
//   console.log('ooooooooname');
//   User.update({
//     userName:req.body.userName
//   },
//   {address:'jaohgbg n'}, 
//   function (err) {})
// });


module.exports = router;
