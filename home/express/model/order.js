/*!
 * 个人订单 dw
 */
var conf = require("../conf/conf.js");
var YG=conf.java;
var WF=conf.javaparty;
var agent=require('superagent');
var dwN=require(conf.root+'/lib/dwNode');
//列表
exports.list=function(keys,fn){
  agent.get(WF+"/orders/account/"+keys.accountId)
  .query(keys.query)
  .query(keys.params)
  .end(dwN.agent_err(fn));
}

//列表
exports.add=function(keys,fn){
  agent.post(WF+'/orders')
  .send(keys.body)
  .end(dwN.agent_err(fn));
}

//订单详情页
exports.detail=function(keys,fn){
  agent.get(WF+'/orders/'+keys.orderId+'/account/'+keys.accountId)
  .end(dwN.agent_err(fn));
}


