<!DOCTYPE html>
<html lang="zh-CN">
<head>
<title>HTML5 文件上传进度条</title>
<meta charset="utf-8" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<script type="text/javascript">
/*
想得到传送文件的进度条
1:要能把文件内容打包并发送  FormData对象
2: 发送过程中,要能不断检测 已发送/全部 progress.onprogress
*/

</script>
<style type="text/css">
#progress{
border: 1px solid blue;
width:500px;
height:20px;
}

#bar {
background:green;
height:20px;
width:0%;
}

</style>
</head>
    <body>
        <h1>在chrome,ff,IE10运行</h1>
        <form>
            <input type="file" name="pic" /><br />
        </form>
        <div id="progress"><div id="bar"></div></div>
    </body>
    <script>
        // 负责ajax发送数据
        function up(fd) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST','upfile.php',true); // 异步传输

            // xhr.upload 这是html5新增的api,储存了上传过程中的信息
            xhr.upload.onprogress = function (ev) {
                var percent = 0;
                if(ev.lengthComputable) {
                    percent = 100 * ev.loaded/ev.total;
                    //document.getElementById('progress').innerHTML = percent;
                    document.getElementById('bar').style.width = percent + '%';
                }
            }

            xhr.send(fd);
        }


        document.getElementsByTagName('input')[0].onchange = function() {
            //alert('你选择文件了');
            //alert(this.files[0]); // 文件对象,html5新增的api

            var fd = new FormData(); // html5新增的对象,可以包装字符,二进制信息
            fd.append(this.name,this.files[0]);

            up(fd);

        }
    </script>
</html>