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
app.use(favicon(__dirname + '/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var C_common=require(conf.root+'/common/common');

app.use(C_common.tool);
app.use(C_common.fs,C_common.notFound);
// error handlers
app.use(C_common.err);

module.exports = app;