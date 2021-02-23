var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.cookie('index', "title Express",{ expires: new Date(Date.now() + 900000)});
  res.render('index', { title: 'Express' });
});

module.exports = router;
