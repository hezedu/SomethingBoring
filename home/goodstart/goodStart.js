var http=require('http')
,fs=require('fs')
,gs={};
gs.vhost=require('./vhost.conf.js').F;
var portarr=Object.keys(gs.vhost)
,dwT=require('./dwlib-T.js').F
,url=require('url'),
app;
var len=portarr.length;
	for(var i=0;i<len;i=i+1){
		createS(portarr[i]);
	}	 
function createS(port){  
	var a=null, 
	app=http.createServer(function (req, res){
		var host=req.headers.host.split(':')
		,domain=host[0] 
		,port=host[1]
		,isIp=isNaN(domain.substr(domain.lastIndexOf('.')))
		,path=decodeURIComponent(url.parse(req.url).pathname)||'/'; 
		try{ 
			if(isIp){ 
			a=gs.vhost[port][domain]['route'][path];  
			//a=require(gs.vhost[port][domain]['dir']+'/index.js');  
			//res.write(gs.vhost[port][domain]['er']); 
			}else{ 
			a=require('./index.js');   
			}      
			a(req,res);
		}catch(e){ 
			res.writeHead(404); 
			res.end(dwT.simpleDump(e));
		} 
		res.end();
	});
	app.listen(port); 
	console.log('app listen '+port)
	if(a!==null && typeof a.other !=='undefined'){
		try{
			a.other(app);
		}catch(e){}
		a=null;
	}	
}