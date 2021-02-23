/*!
 * 活动  dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//列表页
exports.list = function(keys, fn) {
  agent.get(WF + '/parties/wechat')
    .query(keys.query)
    .query(keys.params)
    .end(dwN.agent_err(fn));
}

//首页menu
exports.categories = function(key, fn) {
  agent.get(WF + '/categories/wechat/'+key)
    .end(dwN.agent_err(fn));
}

//查看该活动是否有群组
//key === partyID
exports.detail = function(key, fn) {
  agent.get(WF+"/parties/wechat/"+key)
    .end(dwN.agent_err(fn));
}

//查看该活动是否有群组
//key === relationId
exports.groupSearch = function(key, fn) {
  agent.get(WF+"/groups/relation/"+key+"/type/1")
    .end(dwN.agent_err(fn));
}

//今夜特价
exports.specialoffer=function(keys,fn){
  agent.get(WF+'/parties?specialOffer=1&detail=0')
  .query(keys.query)
  .end(dwN.agent_err(fn));
}

