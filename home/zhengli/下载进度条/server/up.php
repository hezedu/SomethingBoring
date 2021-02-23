 <?php
    header('content-type:text/html;charset=utf8');
    $curl = curl_init();
   $data = array('psw'=>$_POST['psw'],'file'=>'@'.dirname(__FILE__).'/'.$_POST['file']);
     curl_setopt($curl, CURLOPT_URL, "http://k.test.cn/upupupup.php");
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    $result = curl_exec($curl);
    curl_close($curl);
    echo json_decode($result);

?>



