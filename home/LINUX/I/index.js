var http=require('http'),
url= require('url'),
fs=require('fs'),
buffer=require('buffer'),
dir=__dirname+'/',
end='</html>';
var dir=__dirname+'/';
var head=dir+'head/';
var fk=dir+'FK/',
zupudir=fk+'zuPu/zuPu.js';
var buff={zuPu:{}};
buff.common=fs.readFileSync(zupudir,'').toString();
buff.index_tpl=fs.readFileSync('./index.html','').toString();
http.createServer(function (req, res) {
var IN=function(path,b){
b=res||b;
testfs=fs.readFileSync(path,['String','r']);
b.write(testfs);
}

var dwN=require('./dwN').F;
//主页
if('/'==req.url){
res.writeHead(200,{'Content-Type':'text/html'});
res.write(dwN.head);
res.end(buff.index_tpl);
}else if('zupu'==req.url.split('/')[1]){
res.writeHead(200,{'Content-Type':'text/html'});
var now = new Date().getTime();
res.write(dwN.head);

res.write('<script>'+buff.common+'</script>');
var zuPu=require(zupudir).F; 

if(!req.url.split('/')[2]){
res.write('<title>zuPuJS</title>');
var len=process.moduleLoadList.length,dump='';
for(var i=0;i<len;i++){
var v=process.moduleLoadList[i].split(' ');
var v2=v.join('~~');
dump+='<a href="/zupu/nodejs/NODEJS_MOD-'+v2+'">'+v[1]+'<span style="color:#999">'+v[0].sup()+'</span></a>';
}
if(typeof buff.zuPu['index0']==='undefined'){
buff.zuPu['index0']='<style>\
.dw_0{width:488px;float:left;text-align:center;font-family:"微软雅黑";border-left:2px solid midnightblue;}\
.dw_0.on{border-right:2px solid midnightblue;border-left:0;}\
.title{font-size:30px;line-height:50px;height:50px;color:midnightblue;margin-bottom:20px;}\
.title2{font-size:20px;line-height:30px;text-align:left;background:midnightblue;color:#fff;margin-top:10px;clear:both}\
.dw_0 a{display:block;width:50%;float:left;line-height:30px;color:royalblue;text-decoration:none;text-align:left;text-indent:10px;}\
.dw_0 a:hover{text-decoration:underline}\
.dw_zupu_logo{line-height:1.1;display:block;float:left;height:50px;background:midnightblue;color:#e6e68f;font-size:14px;font-family:"宋体";width:40px;\
border-right:darkgoldenrod 3px solid;border-bottom:goldenrod 3px solid;text-decoration:none;position:relative}\
.dw_zupu_logo:hover{border-right:goldenrod 3px solid;border-bottom:darkgoldenrod 3px solid;}\
.dw_zupu_doload{float:right;height:40px;width:80px;background:mediumblue;line-height:40px;color:#fff;text-align:center;display:block}\
</style>\
<div style="width:980px;margin:0 auto;height:100%;">\
<!--<div style="height:53px;"><a href="/zupu" class="dw_zupu_logo"><span style="position:absolute;top:6px;left:6px ">族<br/>谱</span></a><span style="line-height:50px;color:#999"> &#12288; &#12288;js强力dump</span>&#12288;&#12288;<a style="float:right" href="https://github.com/hezedu/zuPu">github</a>&#12288;<a  href="" class="dw_zupu_doload">下载</a></div>-->\
<div class="dw_0 on">\
<div class="title">window</div>\
<script> if(navigator.userAgent.indexOf("MSIE")!==-1){document.write(\'<h2>经测试在IE8下遍历 window document 等全局对象无法通过.其它一般对象可以用.</h2>\'+\
decodeURI(\"%3C\")+\'!--\');}</script>\
<a href="/zupu/window/window">window</a>\
<a href="/zupu/window/document">document</a>\
<div class="title2">其它</div>\
<a href="/zupu/window/jQuery">jQuery2.1.1</a>\
<!--//-->\
<a href="/zupu/window/zuPu">zuPu</a>\
<a href="/zupu/window/search" style="width:100%;font-size:20px;text-align:center;margin-top:100px">搜索search</a>\
<div style="clear:both"></div>\
</div>\
<div class="dw_0">\
<div class="title">nodejs</div>\
<a href="/zupu/nodejs/global">global</a><a href="/zupu/nodejs/module" >module</a><a href="/zupu/nodejs/process" >process</a>\
<a href="/zupu/nodejs/res"><span style="color:#000">http.createServer(</span>"res"</a>\
<a href="/zupu/nodejs/req"><span style="color:#000">http.createServer(</span>"req"</a>\
<a href="/zupu/nodejs/require">require</a><div class="title2">自定义module</div><a href="/zupu/nodejs/sqlite3">sqlite3</a><a href="/zupu/nodejs/mongodb">mongodb</a><a href="/zupu/nodejs/socket.io">socket.io</a><div class="title2">自带module</div>'+dump+'</div></div><div style="clear:both"></div>';
}
res.write(buff.zuPu['index0']);
}else{ 
function zuputest(a,b,c){
a=req.url.split('/')[a];
a=decodeURI(a);
c=c ||0;
var d=req.url.split('/')[a-1];
if(typeof buff.zuPu[d]==='undefined'){
buff.zuPu[d]={};
}
if(typeof buff.zuPu[d][a]==='undefined'){
buff.zuPu[d][a]='';

if(c===0){
var b= b || (function(){
if(a.substr(0,11)==="NODEJS_MOD-"){
var a1=a.substr(11);
a1=a1.split('~~');
if(a1[0]==='Binding'){
return process.binding(a1[1]);
}else{
return require(a1[1])
}
}else{
return require(a);
}
})();
var text=(a.substr(0,11)==="NODEJS_MOD-") ? a.substr(11).replace('~~','  ')   :  a;
buff.zuPu[d][a]+='<title>'+text+' -- zuPu </title><h1>'+text+'<span style="font-size:12px;font-weight:normal;line-height:1;position:absolute;top:0;right:0">缓存于 '+dwN.format(Date())+'</span></h1>';
buff.zuPu[d][a]+=zuPu(b);
}else{
buff.zuPu[d][a]+='<script>\
document.write("<title>'+a+' -- zuPu </title>\
<h1>'+a+'</h1>");document.write(zuPu('+a+'));\
</script>';
}
}  
res.write(buff.zuPu[d][a]);
}
switch(req.url.split('/')[2]){
case 'nodejs':
switch(req.url.split('/')[3]){
case 'res':
zuputest(3,res);
break;
case 'req':
zuputest(3,req);
break;
case 'global':
zuputest(3,global);
break;
case 'require':
zuputest(3,require);
break;
case 'module':
zuputest(3,module);
break;
case 'process':
zuputest(3,process);
break;
default:
zuputest(3);
break;
}

break;

case 'window':
switch(req.url.split('/')[3]){
case 'jQuery':
res.write('<span style="float:right">script src=<input type="text" style="width:400px;height:30px;" value="http://ajax.aspnetcdn.com/ajax/jquery/jquery-2.1.1.js" /></span>');
res.write('<script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-2.1.1.js"></script>');
zuputest(3,'',1);
break;
case 'search':
res.write('<style>\
.dw_zupu_other{height:30px;color:#999}\
.dw_zupu_otherbutton{clear:both;line-height:30px;height:30px;\
background:midnightblue;color:#fff;font-size:18px;margin:0 auto;width:100px;margin-top:10px}\
.dw_zupu_otherbutton:hover{background:blue}\
</style>\
<script id="search"></script>\
<div style="width:680px;margin:10px auto">\
<h1 style="text-align:center;margin-bottom:10px;">zuPu</h1>\
<span>script src= <input type="text" style="width:70px;float:right" class="dw_zupu_other" id="input2" placeholder="变量名"  />\
<input type="text" style="width:500px;" class="dw_zupu_other"   placeholder="请输入链接地址"  />\
</span>\
<div class="dw_zupu_otherbutton button" onclick="zuPu.search()" id="submit" >查询</div>\
</div>\
<div id="show"></div>');
//zuputest(3,'',1);
break;
 
default:
zuputest(3,'',1);
break;
}
break;
default:
res.writeHead(404);
res.write('Not Found');
break;
}
}    
res.end('<span style="font-size:12px;color:#aaa">nodejs加载时间:'+dwN.end(now)+'毫秒</span>');
}else if('nodefs'==req.url.split('/')[1]){
	res.writeHead(200, {'Content-Type': 'text/html'});
		if(typeof buff.nodefs_tpl ==='undefined'){ 
			buff.nodefs_tpl=fs.readFileSync('./nodefs.html','').toString();
		}  
		res.end(buff.nodefs_tpl);
}else if('remote'==req.url.split('/')[1]){
		if(typeof buff.nodefs_JS ==='undefined'){ 
			buff.nodefs_JS=require('./nodefs.js').F;
		} 
			var nodefs=buff.nodefs_JS;
			var body=decodeURIComponent(req.url.substr(7));
			var a=url.parse(body),a1=a.pathname,a2=a.query;
			//linuxfs(fs,body);   
			nodefs(res,[fs,body]);
}else if('remote_tree' == req.url.split('/')[1]){
			if(typeof buff.nodefs_JS ==='undefined'){ 
			buff.nodefs_JS=require('./nodefs.js').F;
		} 
			var nodefs=buff.nodefs_JS;
		(function(){  
		var body=decodeURIComponent(req.url.substr(12));
		body=body.split('?');
		//treeGet(fs,body[0],body[1]); 
		nodefs(res,[fs,body[0],body[1]]); 
		})(); 

}else if('GET' == req.method){
var reqU=req.url, 
ty=houZui(reqU);
reqU=decodeURIComponent(reqU); 
if(reqU.substr(0,3)=="/I/"){ 
reqU=__dirname+reqU;
} 
fs.stat(reqU,function(err,stat){
if(err || !stat.isFile()){
res.writeHead(404);
res.end('not found');
return;  
}     
switch(ty){
case 'jpg':
case 'jpeg':
case 'png':
case 'gif':
serve(reqU,'application/'+ty);
break;
default:
break;
}
}); 
}else{
res.writeHead(404);
res.end('Not Found');
}

//LIB
function isDir(stat){
   try{
   if(stat.isDirectory()){
   return 1;
   }else{  
   return 0;   
   }
   }catch(e){
   return -1;
   } 
  };  
function isemptymulu(fs,dir){
var files= fs.readdirSync(dir),len=files.length;
if(!len){
return 1;  
}else{  
for(var i=0;i < len; i++){
var a1=fs.statSync(dir+'/'+files[i]);
if(isDir(a1)==1){
return 0;
}   
}
return 2;
}
}
 
 
function isroot(dir){
  var a=dir.length-1;
  a=dir[a];
  if(a=='/' || a=='\\'){
  return dir;
  }else{
  return dir+'/';
  }
}  
function houZui(a){
	a=a.substr(a.lastIndexOf('.')+1);
return a.toLowerCase();
}
function serve (path,type){
res.writeHead(200,{'Content-Type':type});
fs.createReadStream(path).pipe(res);
}
function selectOne(a){
a=a.split('/');
}
//LIB
}).listen(80,'103.242.64.156');
//}).listen(820,'127.0.0.1');
console.log('Server running at http://127.0.0.1:820/'.rainbow);
