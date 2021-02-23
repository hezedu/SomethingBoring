var express = require('express');
var router = express.Router();
var  multer=require('multer');
var path = require('path');
util = require('util');
var mkdirp = require('mkdirp');
var sas = require('sas');
var exec = require('child_process').exec;
const destPath = path.join(__dirname, 'upload');
// var uploading = multer({
//   dest: 'upload/',
// })
var sasIte = function(v){
  return function(cb, i){
    const  p = path.join(destPath, i.index);
    exec(`mv ${v} ${p}`, cb)
  }
}

var formidable = require('formidable')

router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm()
  form.multiples = true;
  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    const data = util.inspect({fields: fields, files: files})

    console.log('files', files.file.length)
    console.log('file0', files.file)
    var rootName = files.file[0].name;
    rootName = rootName.split('/')[0];
    var folderDirMap = {
      rootName: true
    };
    var asyncTasks = {

    }
    files.file.forEach((v) => {
      const dirname = path.dirname(v.name);
      if(!folderDirMap[dirname]){
        mkdirp.sync(path.join(destPath, dirname))
      }
      asyncTasks[v.name] = v.path;
    })
    sas(asyncTasks, sasIte, (err) => {
      if(err){
        return next(err);
      }
      res.end('ok');
    })

  });
});

module.exports = router;
