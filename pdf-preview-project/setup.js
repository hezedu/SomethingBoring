var express = require('express');
var path = require('path');
var logger = require('morgan');
module.exports = function(app){
  app.use(logger('dev'));
  app.use('/static', express.static(path.join(__dirname, 'static'), {
    // setHeaders(res){
    //   res.set('Connection', 'close');
    // }
    maxAge: 1000 * 60 * 60
  }));
}
