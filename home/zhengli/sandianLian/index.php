<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<script id="queryJ" src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<style>
h1{text-align:center;border-bottom:1px solid #000;margin-bottom:10px;position:relative}
*{margin:0;padding:0;font-family:"宋体"}
#show{margin:0 auto;width:90%;padding-top:10px;}
#show dl{position:relative;margin-top:1px\9;}
#show dl span{background:red;font-weight:bold;cursor:pointer;padding:0 10px;}
#show dt{margin-left:30px;}
#show i{float:right}
#show input{margin-right:5px}
#show label{height:12px;width:12px;display:block;margin-right:2px;margin-top:1px;float:left; border:2px outset #555;}
#show label.checked{background:red}
#show label.checked2{background:#aaa}
#make{height:36px;width:120px;background:blue;color:#fff;font-size:18px;font-weight:bold;position:fixed;bottom:10px;left:40%}
#jance{width:400px;height:400px;border:1px solid yellow;padding:5px;position:absolute;right:0;top:50px;word-wrap:break-word;overflow:auto}
</style>
<?php
class SandianLian{
public $root;
public $v=30000;
private $hash;
public function SandianLian()
{
$this->root=$_SERVER['DOCUMENT_ROOT'].'/';
$this->hash=$this->root.'SDianL/lib/hash.php';
}
//////////////////
/* public function init(){
$a=$this->hash;
 if(!file_exists($a))
 {
    $file=fopen($a,'w');
    $this->filedump($this->root,$file);
 }
} */
//////////////////
public function filedump($a){
//if($a[strlen($a)-1]!='/'){$a.='/';}
if(is_dir($a)){
$b=scandir($a);
foreach($b as $v)
{
if($v=='.' || $v=='..'){continue;}
if(is_dir($a.$v))
	{  
		echo '<dl><label name='.$a.$v.' value="" ></label><span>'.basename($a.$v).'/</span><dt>';
		$this->filedump($a.$v.'/');
		echo '</dt></dl>';
	}else
	{
		echo '<dl><label name='.$a.$v.' value="'.hash_file('md5',$a.$v).'"></label>'.$v.'</dl>';
	}
}
}
}
//////////////////
}
?>
<?php
$sdl=new SandianLian;
$roo=$sdl->root;
$v=$sdl->v;
?>
<h1><span style="font-size:14px;float:left;position:absolute;left:0;top:15px"><?=$roo?> 当前版本：<span style='float:right;color:yellow;background:black;'><?=$v?></span></span>闪电链 </h1>
<div id="show">
<dl><label name="<?=$roo?>" value="" ></label><span><?=$roo?></span><dt style="display:block">
<?php
$sdl->filedump($roo);
?>
</dt></dl>
</div>

<button id="make">制作</button>
<div id="jance"></div>


<script>
var log='';
function jianCe(a){
var j=$('#jance');
if (typeof(a)=='function'){
var startTime = new Date().getTime();
a.call(this);
var endTime = new Date().getTime(); 
log+="运行时间:"+(endTime-startTime)+"ms<br/>";
}else{
log+=a+"<br/>";
}
j.html(log);
var test=document.getElementById('jance');
alert(test);
}




(function fileTree(){
var show=$('#show'),
dl=$('dl',show),
title=$('dl span',show),
label=$('dl label',show),
c='checked',
c2='checked2';
dl.each(function(){
var tdl=$(this),len=tdl.children('dt').children().length,
spa=tdl.children('span');
if(!len)
spa.css('background','#FF99CC');
});
title.click(function(){
$(this).next('dt').toggle();
});
//label
label.click(function(){
var startTime1 = new Date().getTime();
var t=$(this);
var a=t.nextAll('dt');
if(a.length)
{
a=a.find('label');
if(t.hasClass(c) && !t.hasClass(c2))
{
t.removeClass(c);
a.removeClass(c);
}else{
t.addClass(c).removeClass(c2);
a.addClass(c).removeClass(c2);
}
}else{
t.toggleClass(c);
}
b=t.parentsUntil(show);
var log='';
b.each(function(){
var t1=$(this),t=t1.parent().children('label');
if(!t.length){return true;}
var b1=t1.find('.'+c).length,
b2=t1.find('label').length;
if(b1==b2){
t.removeClass(c2);
t.addClass(c);
}else if(b1 !=0 ){
t.addClass(c2);
t.addClass(c);
}
else{
t.removeClass(c2);
t.removeClass(c);
}
log+=" (check)= "+b1+" label= "+b2+"<br/>";
});
$('#jance').html(log);
var endTime1 = new Date().getTime(); 
$('#jance').text(endTime1-startTime1);
});
//make
(function zhiZuo(){
	var make=$('#make'),data='';
	make.click(function(){

		var lab2=label.filter('.'+c);
		lab2.each(function(){
			var t=$(this),
			name=t.attr('name'),
			value=t.attr('value');
			data+=name+":'"+value+"',";
		});
		data=data.substr(0,data.length-1);
		jianCe(data);
	});
})();
})();
</script>