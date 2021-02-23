var conf = require("../conf/conf.js");
var dwN = require(conf.root + "/lib/dwlib.N");
var dwT = require(conf.root + "/lib/dwlib.T");

exports.init = function(req, res, next) {
  req._path = req.path.split('/');
  next();
};

exports.tool = function(req, res, next) {
  res.locals.dwT = dwT
  next();
};




exports.notFound = function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

exports.err = function(err, req, res, next) {
  res.status(err.status || 500);
  if (process.env.NODE_ENV === 'production') {
    err = {};
  }
  console.error('**********************dw_err*****************');
  console.error('Method = ' + req.method + '\n host==' + req.headers.host + '\n OriginalUrl=' + req.originalUrl + '\n UA = ' + req.headers['user-agent'] + '\n IP = ' + dwN.getClientIp(req));
  console.error(err);
  console.error('**********************************************\n at ' + Date() + '\n');
  res.render('error', {
    status: err.status,
    message: err.message,
    error: err
  });
};