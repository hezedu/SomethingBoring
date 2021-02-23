var express = require('express');
var router = express.Router();
var conf = require('../conf/conf.js');
var qiniu = require('qiniu');
var agent = require('superagent');
var dateFormat = require('../lib/dwlib.T.js').WF_Dateformat;

qiniu.conf.ACCESS_KEY = conf.qiniu.ACCESS_KEY;
qiniu.conf.SECRET_KEY = conf.qiniu.SECRET_KEY;


var getToken = function(){
  var putPolicy = new qiniu.rs.PutPolicy();
  putPolicy.scope = conf.debug ? "combotest" : "combo";
  return {
    uptoken: putPolicy.token(),
    domain: 'http://' + putPolicy.scope + '.qiniudn.com/'
  }
};


var uploadStream = function(key,body, callback){
  var extra = new qiniu.io.PutExtra();
  var token = getToken();
  qiniu.io.put(token.uptoken, key, body, extra, function(err, ret) {
    if (err) return callback(err);
    callback(null, token.domain + ret.key);
  });
};

var generateKey = function(){
  return dateFormat(new Date().getTime(),"yyyyMMdd") + '/' + UUID();
};
/**
 * @return {string}
 */
var UUID = function () {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";
  return s.join("").replace(/-/g, "");
};

exports.getToken = getToken;
exports.uploadStream = uploadStream;
exports.generateKey = generateKey;