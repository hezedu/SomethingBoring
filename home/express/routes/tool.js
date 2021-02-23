var express = require('express');
var router = express.Router();


router.get('/gruntUglify', function(req, res, next) {
  
  res.send('test');
});

module.exports = router;