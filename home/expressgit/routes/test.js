var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.jade_out('tpl.jade', { title: 'Express',detail:{'hello':'world'},name:'你好！' });
});

module.exports = router;
