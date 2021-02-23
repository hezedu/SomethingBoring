exports.F={	
	"80":{
		
	},
	"820":{
		"test820.org":init("./test820.org")
	},
	"830":{
	"test8301.org":{
		"dir":"./test8301.org"
		}
	}
}

function init(a){
var o={};
o.dir=a;
o.route=require(a+'/route').F;
o.fspath=function(a){
	
}
return o;
}