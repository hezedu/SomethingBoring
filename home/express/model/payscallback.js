/*!
 * 支付结果返回接口 dw
 */
var conf = require("../conf/conf.js");
var WF=conf.javaparty;
var agent=require('superagent');
var interf=module.exports;

//阿里 手机版
interf.ali=function(keys,fn){
	agent.post(WF+'/pays/alipayWapNotify')
  .set('Content-type','application/x-www-form-urlencoded')
  .send(keys)
  .end(function(err,res){
    if(err){
      return fn(err);
    }
    return fn(null,res.body);
  });
}
//微信wechat
interf.tenPays=function(keys,fn){
  agent.post(WF+'/tenPays/tenpayNotify')
  .set('Content-type','application/xml')
  .query(keys.query)
  .send(keys.body)
  .end(function(err,res){
    if(err){
      return fn(err);
    }
    return fn(null,res.body);
  });
}
//微信wechat 警告
interf.tenPaysWarn=function(keys,fn){
  agent.post(WF+'/tenPays/warning')
  .set('Content-type','application/xml')
  .query(keys.query)
  .send(keys.body)
  .end(function(err,res){
    if(err){
      return fn(err);
    }
    return fn(null,res.body);
  });
}
