exports.F={	
	"80":{
		
	},
	'8282':{
		"test":init("D:/duWeiwork/DuWeihome/express")
	},
	"820":{
		"test820.org":init("./test820.org")
	},
	"830":{
	"test8301.org":init("./test8301.org")
	}
}


function init(a){
var fs=require('fs');
var o={};
o.dir=a;
function xinjian(a){
    var route="exports.F={\n\t'/':require(\'./index.js\')\n}"
	,index="exports.min=function(req,res){\n\tres.write('<h1>'+req.headers.host+'830 is runing</h1>');\n}";
	fs.writeFileSync(a+'/route.conf.js',route);
	fs.writeFileSync(a+'/index.js',index);
}

try{
	var flies=fs.readdirSync(a);
	if(!flies.length){
	xinjian(a);
	}
}catch(e){
	try{
	fs.mkdirSync(a,777);
	xinjian(a);
	}catch(e){
		
	}
}
o.route=require(a+'/route.conf.js').F;
return o;
}