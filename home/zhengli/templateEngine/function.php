<?php
define('GOD',"/GodModelStart/");
function cb($a){
$b="<!--god".$a[1]."-->";
$c="<!--god-->";
return $c.$a[0].$b;
}
function test_read_php($a)
{
$fp=file_get_contents($a);
$p='/<(\?php|\?=([\s\S]*?)\?)>+/';
$fp=preg_replace_callback($p,"cb",$fp);
$a1=basename($a);
$a3=dirname($a).GOD;
!is_dir($a3) && mkdir($a3);
$a1=$a3.$a1.".php";
$file=fopen($a1,'w');
fwrite($file,$fp);
fclose($file);
require($a1);
}
?>
