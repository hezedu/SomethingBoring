var uglify = require("uglify-js");
var fs = require('fs');
var path = require('path');
var dump = fs.readFileSync(path.join(__dirname, "../static/pdf-build.js"), "utf8");
dump = uglify.minify(dump, {
           fromString: true
}).code;

fs.writeFileSync(path.join(__dirname, "../static/pdf-min.js"), dump);
