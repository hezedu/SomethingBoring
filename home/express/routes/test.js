var express = require('express');
var router =module.exports= express.Router();
var jade = require('jade');
var path = require('path');
//var jadeout = require('./server');


router.get('/css3',function(req,res,next){
/*  console.log(req.path);
   var tpl_path = __dirname.indexOf('node_modules');
    tpl_path = tpl_path > 0 ? __dirname.substr(0, tpl_path - 1) : __dirname;
    tpl_path = path.join(process.cwd(),'/views/test.jade')

  for(var i in jade.cache){
    console.log(i);
    console.log(tpl_path);
    console.log(jade.cache[tpl_path] = {'test':'test'});

    console.log(jade.cache[i].toString());
  }*/
  //res.sendFile(__dirname+'/test.js', {maxAge:1000*60*60*24*365});
/*  res.setHeader('Cache-Control', "max-age="+1000*60*60*24*365+", public");
  res.send('test/css3');*/
  setImmediate(function(){
    console.log(res.get('Etag'))
  })
  res.setHeader('Cache-Control', "max-age="+1000*60*60*24*365+", public");
  res.setHeader('Etag', "11111");
  res.send('test/css3');

});