var express = require('express');
var router = express.Router();
var conf = require('../conf/conf.js');
var C_nodefs = require(conf.C_path+'/nodefs');
module.exports=function(req,res,next){
  res.send('aaa');
}