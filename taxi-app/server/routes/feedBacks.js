var express = require('express');
var router = express.Router();
var FeedBack = require('../models/feedBacks.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/taxi');

router.post('/getFeed', function (req, res, next) {
    var msgLen = req.body.feedText.length;
    console.log(req.body.feedText);
    var param = {
        userName: req.body.userName,
        feedText: req.body.feedText,
        date: new Date().getFullYear() + '年' + (new Date().getMonth()+1) + '月' + new Date().getDate() + '日' + new Date().getHours() + '时' + new Date().getMinutes() + '分' + new Date().getSeconds() + '秒',//时间
        length: msgLen
    }
    var feedBack = new FeedBack(param);
    feedBack.save(function (err) {
        if(err) {
            res.json({
                status:'1',
                msg: '',
                result:''
            });
        }else{
            res.json({
                status:'0',
                msg: '',
                result: ''
            })
        }
    });
});

module.exports = router;