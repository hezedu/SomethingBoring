process.env.NODE_ENV = 'production'
var express = require('express');
var conf= require('./conf/conf.js');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


/*app.engine('html', require('ejs').__express);
app.set('view engine', 'html');

app.set('view cache', true );*/

app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(require('less-middleware')(path.join(c__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var C_common=require(conf.root+'/common/common');

app.use(C_common.init,C_common.tool);

function same(url){
    app.use(url, require('./routes'+url));
}



/*app.use('/ejs',function(req,res,next){
  console.log(require('ejs').cache)
  res.render('index',{process:process})
})*/

same('/test');

same('/');
/*same('/zupu');
same('/nodefs');*/


/*var hotstart = require('hotstart');
app.use(hotstart({dir:__dirname,tpl:'ejs'},app));*/

var zupu=require('zupu.js');



// error handler
var str ='';
for(var i in app){
  str+=i+'\n'
}
//console.log(str)
/*console.log(str)
app.emit('')*/
/*app.handle(req,res,function(){
  console.log('test');
})*/

//console.log(app.handle.toString())



app.use(C_common.notFound,C_common.err);
module.exports = app;