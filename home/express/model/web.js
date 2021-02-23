/*!
 * web 独有 dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');

//列表页
exports.partiesList = function(keys, fn) {
  agent.get(WF + '/parties/web')
    .query(keys.query)
    .query(keys.params)
    .end(dwN.agent_err(fn));
}

//详情页
//key === partyID
exports.detail = function(key, fn) {
  agent.get(WF+"/parties/web/"+key)
    .end(dwN.agent_err(fn));
}
