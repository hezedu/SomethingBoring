/*!
 * 邀请--微信 dw
 */
var conf = require("../conf/conf.js");
var YG=conf.java;
var WF=conf.javaparty;
var agent=require('superagent');
var dwN=require(conf.root+'/lib/dwNode');
//查看自己创建的邀请
exports.invList=function(keys,fn){
  agent.get(WF+"/invitations")
  .query(keys.query)
  .end(dwN.agent_err(fn));
}

//参加的邀请
exports.joinedList=function(keys,fn){
  agent.get(WF+"/invitations/joined")
  .query(keys.query)
  .end(dwN.agent_err(fn));
}

//分享出去的页面详情
exports.share=function(key,fn){
  agent.get(WF+"/invitations/share")
  .query({invitationId:key})
  .end(dwN.agent_err(fn));
}

//商家
exports.parties=function(keys,fn){
  agent.get(WF+'/invitations/parties')
  .query(keys.query)
  .end(dwN.agent_err(fn));
}

//share页创建
exports.create=function(keys,fn){
  agent.post(WF+'/invitations')
  .send(keys.body)
  .end(dwN.agent_err(fn));
}

//商家单个
exports.partiesOne=function(key,fn){
  agent.get(WF+'/invitations/'+key)
  .end(dwN.agent_err(fn));
}

//发起者 响应按钮
exports.invitresponses=function(keys,fn){
  agent.put(WF+'/invitresponses/'+keys.body.respId)
  .send(keys.body)
  .end(dwN.agent_err(fn));
}

//报名者提交
exports.enterOne=function(keys,fn){
  agent.post(WF+'/invitresponses')
  .send(keys.body)
  .end(dwN.agent_err(fn));
}