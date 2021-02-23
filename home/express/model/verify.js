/*!
 * 验证 dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//绑定邮箱
exports.email = function(keys, fn) {
  agent.get(YG + '/verifycode/generate/code/email')
    .query(keys.query)
    .end(dwN.agent_err(fn));
}
//手机获取验证码
exports.getCode = function(keys, fn) {
  agent.get(YG + '/verifycode/generate/code/phone')
    .query(keys.query)
    .end(dwN.agent_err(fn));
}

//验证 验证码
//key == phone , securityCode
exports.verifyCode = function(keys, fn) {
  //return console.log('\n\n\n\n\n\n keys='+JSON.stringify(keys))
  agent.post(YG + '/verifycode/validation/phone')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//邮箱外链落地页
exports.emailDone = function(keys, fn) {
  agent.post(YG+"/verifycode/validation/email")
    .send(keys.body)
    .end(dwN.agent_err(fn));
}