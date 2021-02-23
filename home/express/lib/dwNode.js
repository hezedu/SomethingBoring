exports.same = function(app,url){
  app.use(url, require('./routes'+url));
}