var express = require('express');
var router = express.Router();
var conf = require('../conf/conf.js');
var C_nodefs = require(conf.C_path + '/nodefs');
var fs = require('fs');

router.route("/")
  .get(function(req, res, next) {
    res.render('nodefs/index');
  });

router.use("/body",function(req, res, next) {
    var body = decodeURIComponent(req.url.substr(12));
/*    console.log('req.url='+req.url);
    console.log('body=='+body);*/
    C_nodefs(res, [fs, req.url]);

  });

router.use("/tree",function(req, res, next) {
    (function() {

      //var body = decodeURIComponent(req.url.substr(12));
      var body = req.originalUrl.split('?');
      C_nodefs(res, [fs, req.url, body[1]]);
    })();

});

module.exports = router;