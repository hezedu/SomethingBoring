var path = require('path');
var conf={
  root: path.dirname(__dirname)
};
conf.C_path = this.root+'/common';
conf.M_path = this.root+'/model';
module.exports = conf;