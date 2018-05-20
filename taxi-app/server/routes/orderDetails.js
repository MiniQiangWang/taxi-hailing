var express = require('express');
var router = express.Router();
var User = require('../models/orderDetails.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/taxi');

module.exports = router;