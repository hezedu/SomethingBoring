/*!
 * 支付接口 dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//微信　

exports.wechat = function(keys, fn) {
  agent.post(WF + '/pays/order/'+keys.id+'/payType/2')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

//阿里巴巴　手机版
exports.ali = function(keys, fn) {
  agent.post(WF + '/pays/order/'+keys.id+'/payType/1')
    .send(keys.body)
    .end(dwN.agent_err(fn));
}

