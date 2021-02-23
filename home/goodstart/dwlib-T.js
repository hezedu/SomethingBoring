var dwT={
	autoPath:function(path){
		var len=path.length;
		if(path[len-1]!='/'){
			return path+'/';
		}
		return path;
	},
	is:function(obj){
		return Object.prototype.toString.call(obj).slice(8,-1);
	},
	isyinyong : function(ty){
		if(ty==='String'|| ty==='Number' || ty==='Undefined' || ty==='Null' || ty==='Boolean')
			return 0;
		if(ty==='Function'|| ty==='Object' || ty==='Array')
			return 1;
		return 2;
	},
    isforin : function(obj){
		try {
			for(var i in obj)
			{
				return true;
			}
			return false;
		}catch (e) {
		return false;
		}
	},
	simpleDump:function(e){
		var dump=e.toString()+'\n';
		for(var i in e){
			if(e.hasOwnProperty(i)){
				dump+=i+" : "+e[i]+"\n";
			}
		}
		return dump;
	}
}
if(typeof exports !='undefined')exports.F=dwT;