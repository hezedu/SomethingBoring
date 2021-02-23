/*!
 * 活动  dw
 */
var conf = require("../conf/conf.js");
var YG = conf.java;
var WF = conf.javaparty;
var agent = require('superagent');
var dwN = require(conf.root + '/lib/dwNode');


//获取ＵＲＬ；
exports.getHtml=function(keys,fn){
  if(keys){
    agent.get(keys)
    .end(function(err,res){
      if(err){
        return fn(err);
      }
      return fn(null,res.text);
    });
  }else{
    fn(null,keys);
  }
}

