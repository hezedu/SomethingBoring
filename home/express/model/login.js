/*!
 *  用户登陆 dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//手机验证码登陆
//keys=body:{phone  securityCode }
exports.securityCodelogin = function(keys, fn) {
  agent.post(YG + '/accounts/mobile/securityCode/login')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//微信登陆
//key==openId
exports.wechatlogin = function(key, fn) {
  agent.post(YG+'/accounts/weixin/login')
    .send({openId:key})
    .end(dwN.agent_err(fn));
}



