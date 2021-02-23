exports.F=function(res,arr){

if(arr.length==2){
linuxfs(arr[0],arr[1],res);
}else{

treeGet(arr[0],arr[1],arr[2],res);
}
}
function linuxfs(fs,dir,res){

	/*function showMod(cla,clilkc,img,filename){
	return '<div class="dw_file '+cla+'" onclick="'+clilkc+'"><div class="dw_fileico">'+img+'</div>\
<div  class="dw_filename">'+filename+'</div>\
</div>'
	}*/
				var dump='',muludump=''; 
				fs.readdir(dir,function(err,files){
					if(err){
						var du='路径错误';

						if(err.errno==27){
						du='权限不足';
						}
						return res.end('\n<h1>'+du+'</h1>\n');
					}
					if(!files.length){
						return res.end('\n<h1>没有文件</h1>\n');
					} 
function file(i){
  var filename=files[i],dw_dir=isroot(dir)+filename;
  fs.stat(dw_dir,function(err,stat){
  var _isdir=isDir(stat),cla='',clilkc='',img='';
  if(_isdir==1){
 var isempty=isemptymulu(fs,dw_dir);
switch(isempty){
case 1: 
cla="dw_muluempty";
break;
case 2:
cla="dw_mulu2";
clilkc="fileGet(this,'"+dw_dir+"')";
break;
default:
cla='dw_mulu';
clilkc="fileGet(this,'"+dw_dir+"')";
break;
} 
muludump+='<div class="dw_file '+cla+'"><div onclick="fileicoClick(this)" class="dw_fileico '+img+'"></div>\
<div onclick="'+clilkc+'" class="dw_filename">'+filename+'</div>\
<div class="dw_file2 '+img+'"></div></div>'; 

}else if(_isdir==0){ 
  var houzui=houZui(filename); 
  switch(houzui){
  case "js":
  case "log":
  case "html":  
  case "txt":
  case "css":
  cla='dw_XXX';
  break;
  case "jpg":
  case "jpeg":
  case "png": 
  case "gif": 
//img='<img class="dw_file_img" align="middle" src="'+dw_dir+'"/>';
  cla='dw_tupian';
  clilkc='file_show(this,\''+dw_dir+'\')';
  break;
  default:
  cla="dw_wenjian";
  break;
  }
  }else{
cla="dw_weizhi";
  } 
dump+='<div class="dw_file '+cla+'" onclick="'+clilkc+'"><div class="dw_fileico">'+img+'</div>\
<div  class="dw_filename">'+filename+'</div>\
</div>';  
  i++; 
  if(i==files.length){ 
res.end(muludump+'--||GODMOD||--'+dump);
  }else{
  file(i);
  }
  });
  }
  file(0);
  });
}


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
try{
var a1=fs.statSync(dir+'/'+files[i]);
}catch(e){
continue;
}
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





function treeGet(fs,dir,quer,res){
  quer =quer || '';
	var muludump='',end="</div></div>",test='',cshirt='';
	if(quer[0]=='/'){quer=quer.substr(1);};
	dir=dir.substr(0,dir.lastIndexOf(quer)-1)||'/', quer=quer.split('/');

	function muluMod(cla,clilkc,img,filename){
		return '<div class="dw_file '+cla+'"><div onclick="fileicoClick(this)"  class="dw_fileico '+img+'"></div>\
<div onclick="'+clilkc+'" class="dw_filename">'+filename+'</div>\
<div class="dw_file2 '+img+'">';
} 

	(function a(dir,quer){
		
		var files= fs.readdirSync(dir),len=files.length;

		if(!len){

		//return;
		}else{

		for(var i=0;i < len; i++){
			var cla='',clilkc='',img='';
			var filename=files[i],dw_dir=isroot(dir)+filename,
			a1,a2;
			try{
				a1=fs.statSync(dw_dir),a2=isDir(a1);
			}catch(e){
				continue;
			}
			if(a2==1){ 

//目录
			var isempty=isemptymulu(fs,dw_dir);
				switch(isempty){
					case 1:
						cla="dw_muluempty";
						
						muludump+=muluMod(cla,clilkc,img,filename)+end;
						break;
					case 2:
						cla="dw_mulu2";
						
						clilkc="fileGet(this,'"+dw_dir+"')";
						muludump+=muluMod(cla,clilkc,img,filename)+end;
						break;
					default:
						cla='dw_mulu'; 
						
						clilkc="fileGet(this,'"+dw_dir+"')";

				if(quer[0]==filename){ 
					cshirt=quer.shift();
					var pp=(dir=='/') ? '' : dir;
					img='on'; 
					muludump+=muluMod(cla,clilkc,img,filename);
					a(pp+'/'+cshirt,quer);
					muludump+=end; 
				}else{
					muludump+=muluMod(cla,clilkc,img,filename)+end;	
				}
				
					break;

				}
			}else{
			//return;
			}

		}

	}
  })(dir,quer);
res.end(muludump);
}
