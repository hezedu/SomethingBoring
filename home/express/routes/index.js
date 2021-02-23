var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  var peo = [{
    man: {
      name: 'dw',
      age: 26
    },
    woman:{
      name:'lyf',
      age: 27
    }
  },
  {
    man: {
      name: 'dw2',
      age: 24
    },
    woman:{
      name:'lyf2',
      age: 25
    }
  },
  {
    man: {
      name: 'dw3',
      age: 21
    },
    woman:{
      name:'lyf3',
      age: 22
    }
  }]


  res.render('index', {
    data: peo
  });
});
router.get('/test', function(req, res, next) {

  res.render('test', {
    data: 'test'
  });
});

router.get('/test/:id', function(req, res, next) {

  res.send({id:req.params.id});
});

module.exports = router;