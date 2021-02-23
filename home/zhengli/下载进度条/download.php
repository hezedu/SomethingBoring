<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<?php
$url="http://114.215.123.183/vcredist_x64.exe"; $loct="vcredist_x64.exe";
include('DW_downUp.php');
$test=new DW_downUp($url,$loct);
?>
<html>
<body>
<table border="1" width="300">
<tr><td width="100">文件大小</td><td width="200">
<div id="filesize">未知长度</div></td></tr>
<tr><td>已经下载</td><td>
<div id="downloaded">0</div></td></tr>
<tr><td>完成进度</td><td>
<div id="progressbar" style="float:left;width:1px;text-align:center;color:#FFFFFF;background-color:#0066CC"></div>
<div id="progressText" style=" float:left">0%</div></td></tr>
</table>
<script type="text/javascript">
//文件长度
var filesize=0;
function $id(obj) {return document.getElementById(obj);}
//设置文件长度
function setFileSize(fsize) {
    filesize=fsize;
    $id("filesize").innerHTML=fsize;
}
//设置已经下载的,并计算百分比
function setDownloaded(fsize) {
    $id('show').innerHTML='';
    $id("downloaded").innerHTML=fsize;
    if(filesize>0) {
        var percent=Math.round(fsize*100/filesize);
        $id("progressbar").style.width=(percent+"%");
        if(percent>0) {
            $id("progressbar").innerHTML=percent+"%";
            $id("progressText").innerHTML="";
        } else {
            $id("progressText").innerHTML=percent+"%";
        }
    }

}
</script>
<div id="show">
<?php 
$test->download();
?>
</div>
</body>
</html>