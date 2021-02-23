//变量
var x=$('#dw_x_chiZhi'),
y=$('#dw_y_chiZhi'),
h=$('body').height(),
w=$('body').width(),
ck=$('#dw_chanKaoxian');
//common
$("*").mousedown(function(){return false});
//$("*").mouseup(function(){return true});
//尺子
y.height(h);
x.width(w);
for(var i=2;i<=w;i++)
{
if(i%100==0)
	{
x.append("<div class='dw_chiZhi_100'><span>"+i+"<small>px</small></span></div>");
}else if(i%50==0)
{
x.append("<div class='dw_chiZhi_50'></div>");
}
else if(i%10==0)
{
x.append("<div class='dw_chiZhi_10'></div>");
}
else if(i%2==0)
{x.append("<div class='dw_chiZhi_2'></div>");
}
}
for(var i=2;i<=h;i++)
{
if(i%100==0)
{
y.append("<div class='dw_chiZhi_100_y'><span>"+i+"<small>px</small></span></div>");
}
else if(i%50==0)
{
y.append("<div class='dw_chiZhi_50_y'></div>");
}
else if(i%10==0)
{
y.append("<div class='dw_chiZhi_10_y'></div>");
}
else if(i%2==0)
{y.append("<div class='dw_chiZhi_2_y'></div>");
}
}
//参考线
var bool=false;  
var offsetX=0;  
var offsetY=0;
 



x.mousedown(function(e){
ck.append("<div><div>");
bool=true;  
offsetX = event.offsetX;
offsetY = event.offsetY;
});

$('body').mouseup(function(){  
bool=false;  
}).mousemove(function(e){  
if(!bool)  
return;
var x = event.clientX-offsetX;  
var y = event.clientY-offsetY;  
//ck.css("left", x);  
ck.css("top", y);  
});



//$('#dw_chanKaoxian').delegate('div','mousedown',function(){alert('aa')});