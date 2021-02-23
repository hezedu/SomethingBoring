var express = require('express');
var router = express.Router();

var conf = require('../conf/conf');

var M_a = require('../models/a');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'+M_a.v +' ### conf:'+M_a.test });
});

module.exports = router;
