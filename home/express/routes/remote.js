var express = require('express');
var router = express.Router();
var conf = require('../conf/conf.js');
var C_nodefs = require(conf.C_path+'/nodefs');

router.route("/")
.get(function(req, res, next) {
    res.render('nodefs/index');
  });

module.exports = router;