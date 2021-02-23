/*!
 * 个人用户信息接口 dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//首页；
//keys = accountId
exports.info = function(keys, fn) {
  agent.get(YG + '/accounts/' + keys + '/person')
    .end(dwN.agent_err(fn));
}

//用户信息修改
exports.modify = function(keys, fn) {
  agent.put(YG + '/accounts/' + keys.accountId)
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//手机号 绑定
//keys == accountId \ moblie;
exports.mobileBind = function(keys, fn) {
  agent.put(YG + '/accounts/mobile/bind')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//订单 票 券 活动 计数
//keys= accountId;
exports.orderCount = function(keys, fn) {
  agent.get(WF + '/orders/account/' + keys + '/countOrder')
    .end(dwN.agent_err(fn));
}

//用户合并
exports.merger = function(keys, fn) {
  agent.put(YG + '/accounts/merge')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//微信登陆
exports.wechatLogin = function(keys, fn) {
  agent.post(YG + '/accounts/weixin/login')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//微信公共帐号 通过 手机号 验证 绑定此手机好的 账户是否存在 
//警告：有 安全漏洞 不可以暴露到外
//key == 手机号
exports.WXexist = function(key, fn) {
  agent.get(YG + '/accounts/wx/exist')
    .query({
      mobile: key
    })
    .end(dwN.agent_err(fn));
}