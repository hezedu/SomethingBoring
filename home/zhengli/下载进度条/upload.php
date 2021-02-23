<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<script id="queryJ" src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>

<button id="shangchuan">上传</button>
<pre></pre>
<script>
$("button").click(function(){
  $.post("server/up.php",
  {
    psw:"123psw123",
    file:"btdad.jpg"
  },
  function(data,status){
    $('pre').html("Data: " + data + "\nStatus: " + status);
  });
});
</script>
