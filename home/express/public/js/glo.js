/*
*全局变量
*/
var $glo={
	win : $(window),
  doc:$('document'),
  html:$('html'),
	content : $('#content'),
	head : $('#head'),

}
$glo.winH=$glo.win.height();
$glo.winW=$glo.win.width();

$glo.body=$glo.html.children('body');

console.log($glo.body.length)