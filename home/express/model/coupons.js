/*!
 * 个人用户信息接口 dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//券的列表
exports.list = function(keys, fn) {
  agent.get(WF + "/couponCodes/account/" + keys.accountId)
    .query(keys.query)
    .query(keys.params)
    .end(dwN.agent_err(fn));
}

//赠送
exports.present = function(keys, fn) {
  agent.post(WF + '/couponCodes/present/' + keys.telPhone)
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//接收赠券btn
//keys = codeID 
exports.receive = function(keys, fn) {
  agent.get(WF + '/couponCodes/' + keys.codeID + '/present')
  .query(keys.query)
    .end(dwN.agent_err(fn));
}

//券绑定
exports.bind = function(keys, fn) {
  agent.put(WF + '/couponCodes/bindingCouponCode/' + keys.accountId)
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//抢券　
//keys = voucherId , accountId;
exports.loot = function(keys, fn) {
  agent.get(WF + '/couponGroup/' + keys.voucherId + '/couponCode')
    .query(keys.query)
    .end(dwN.agent_err(fn));
}