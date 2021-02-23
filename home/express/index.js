var app = require('./app');

module.exports = function(req,res,next){
  app.handle(req,res,next);
}