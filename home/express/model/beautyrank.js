/*!
 * 美女局
 */

var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//分页条件查询美女信息
exports.list = function(keys, fn) {
  agent.get(WF + '/beautyContests/currentPeriod')
    .query(keys.query)
    .query(keys.params)
    .end(dwN.agent_err(fn));
}

//投票
exports.vote = function(keys, fn) {
  agent.post(WF + '/beautyContests/vote/'+keys.accountId)
    .send({id:keys.id})
    .end(dwN.agent_err(fn));
}

//投票
exports.tpl = function(key, fn) {
  agent.get(WF + '/beautyContestGroups/currentPeriod?currentPeriod='+key)
    .end(dwN.agent_err(fn));
}