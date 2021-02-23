var path = require('path');
var conf={
  root: path.dirname(__dirname)
};
conf.C_path = conf.root+'/common';
conf.M_path = conf.root+'/model';

module.exports = conf;