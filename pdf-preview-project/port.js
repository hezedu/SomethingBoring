var webpack = require('webpack')
var webpackConf = require('./webpack.config')
const compiler = webpack(webpackConf);
console.log('compiler', compiler)
