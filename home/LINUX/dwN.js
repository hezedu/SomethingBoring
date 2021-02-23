//license=jquery.license	
var dwN={
head:'<style>*{margin:0;padding:0}input{text-indent:5px;}\
.button{text-align:center;cursor:pointer}\
</style>\
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\
<meta http-equiv="Content-Language" content="zh-cn">\
<meta http-equiv="X-UA-Compatible"content="IE=edge" />'
,
end:function(start){
var endtime=new Date().getTime();
return (endtime-start).toString();
},
format:function(b){
var a=b.split(' ');
if(a[5]=='GMT+0800'){
function f1(a){
switch(a){
case 'Jan':
return '一月';
break;
case 'Feb':
return '二月';
break;
case 'Mar':
return '三月';
break;
case 'Apr':
return '四月';
break;
case 'May':
return '五月';
break;
case 'Jun':
return '六月';
break;
case 'Jul':
return '七月';
break;
case 'Aug':
return '八月';
break;
case 'Sep':
return '九月';
break;
case 'Oct':
return '十月';
break;
case 'Nov':
return '十一月';
break;
case 'Dec':
return '十二月';
break;
default:
return a;
break;
}
};

function f0(a){
switch(a){
case 'Sun':
return '星期天';
break;
case 'Mon':
return '星期一';
break;
case 'Tue':
return '星期二';
break;
case 'Wed':
return '星期三';
break;
case 'Thu':
return '星期四';
break;
case 'Fri':
return '星期五';
break;
case 'Sat':
return '星期六';
break;
default:
return a;
break;
};
};
a[1]=f1(a[1]);
a[0]=f0(a[0]);
a.push(a.shift());
return a.join(' ');
}else{
return b;
}
}
}
//坑爹的exports---NODEJS
if(typeof exports !='undefined')exports.F=dwN;

