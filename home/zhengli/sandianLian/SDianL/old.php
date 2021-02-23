<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<script id="queryJ" src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<style>
h1{text-align:center;border-bottom:1px solid #000;margin-bottom:10px;position:relative}
*{margin:0;padding:0}
#show{margin:0 auto;width:90%;margin:0 auto;padding-top:10px;}
#show dl{position:relative}
#show dl span{background:red;font-weight:bold;cursor:pointer;padding:0 10px;}
/* #show span{position:absolute;top:0;right:0;} */
#show dt{margin-left:30px;display:none}
#show i{float:right}
#show input{margin-right:5px}
#show label{height:14px;width:14px;display:block;margin-right:2px;float:left; border:1px outset #555;}
#show label.checked{background:red}
#make{height:36px;width:120px;background:blue;color:#fff;font-size:18px;font-weight:bold;position:fixed;bottom:10px;left:40%}
</style>
<?php
class SandianLian{
public $root;
public $v=30000;
private $hash;
public function SandianLian()
{
$this->root=$_SERVER["DOCUMENT_ROOT"]."/";
$this->hash=$this->root.'SDianL/lib/hash.php';
}
//////////////////
public function init(){
$a=$this->hash;
 if(!file_exists($a))
 {
    $file=fopen($a,'w');
    $this->filedump($this->root,$file);
 }
}
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
		echo "<dl><label   value=".$a.$v." ></label><span>".basename($a.$v).'/'."</span><dt>";
		$this->filedump($a.$v.'/');
		echo "</dt></dl>";
	}else
	{
	
	echo "<dl><label  value=".$a.$v."></label>".$v."<i>".hash_file('md5',$a.$v)."</i></dl>";
	
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
<?php
$sdl->filedump('D:/WWW/test/');
?>
</div>
<button id="make">
开始制作
</button>
<div id="janche" style="width:400px;height:400px;border:1px solid ;position:fixed;yellow;padding:5px;right:0;top:50px"></div>
<script>

(function fileTree(){
var startTime = new Date().getTime(); 
var show=$('#show'),
dl=$('dl',show),
title=$('dl span',show),
label=$('dl label',show),
c='checked';
dl.each(function(){

var tdl=$(this),len=tdl.children('dt').children().length,
spa=tdl.children('span');
if(!len)
spa.css('background','#FF99CC');
});
title.click(function(){
$(this).next('dt').toggle();
});
label.click(function(){
//alert('aa');
var startTime1 = new Date().getTime(); 
var t=$(this);
var a=t.nextAll('dt');
if(a.length)
{
a=a.find('label');
if(t.hasClass(c))
{
t.removeClass(c);
a.removeClass(c);
}else{
t.addClass(c);
a.addClass(c);
}
}else{
t.toggleClass(c);
}
b=t.parentsUntil(show);
b.each(function(){
var t=$(this),b1=t.find('.'+c).length,
b2=t.find('label').length,t=t.parent().children('label');
if(b1==b2)
t.addClass(c);
else
t.removeClass(c);
});
var endTime1 = new Date().getTime(); 
$('#janche').text(endTime1-startTime1);
});
var endTime = new Date().getTime(); 
$('#janche').text(endTime-startTime);
})();

</script>