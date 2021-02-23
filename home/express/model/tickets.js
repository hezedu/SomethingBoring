/*!
 * 个人票 dw
 */
var conf = require("../conf/conf.js");
var YG=conf.java;
var WF=conf.javaparty;
var agent=require('superagent');
var dwN=require(conf.root+'/lib/dwNode');
//首页；
exports.list=function(keys,fn){
  var tmp= agent.get(WF+"/tickets/account/"+keys.accountId);
  keys.query && tmp.query(keys.query)
  tmp.end(dwN.agent_err(fn));
}

//赠送
exports.Present=function(keys,fn){
  agent.put(WF+'/codes/'+keys.codeID+'/present')
  .send(keys.body)
  .end(dwN.agent_err(fn));
}

//接收票
exports.Receive=function(keys,fn){
  agent.get(WF+'/codes/'+keys.codeID+'/present')
  .query(keys.query)
  .end(dwN.agent_err(fn));
}

//待接收的票 列表
exports.receiveList=function(keys,fn){
  var tmp=agent.get(WF+'/tickets/present/account/'+keys.accountId);
  tmp.query(keys.query);
  keys.params && tmp.query(keys.params);
  tmp.end(dwN.agent_err(fn));
}

//*******************************检票*******************************

//检票列表
//keys 激活码 id  
exports.checkList=function(key,fn){
  agent.get(WF+'/codes/' + key + '/tickets')
  .end(dwN.agent_err(fn));
}

//检一张票
//keys id=激活码  id;
exports.checkOne=function(keys,fn){
  agent.put(WF+'/codes/' + keys.id)
  .send({id:keys.id,codeStatus:keys.codeStatus})
  .end(dwN.agent_err(fn));
}

//全部检票
//keys id=激活码  id;
exports.checkAll=function(keys,fn){
  agent.put(WF+'/codes/' + keys.id + '/checkedAllTicket')
  .send({id:keys.id,codeStatus:keys.codeStatus})
  .end(dwN.agent_err(fn));
}