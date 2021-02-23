<?php class DW_downUp{
public $url;
public $loction;
public function DW_downUp($a,$b){
	$this->url=$a;
	$this->loction=$b;
}
public function download(){
ob_start();
@set_time_limit(300);
$file = fopen ($this->url, 'rb');
if ($file) {
    //获取文件大小
    $filesize = -1;
    $headers = get_headers($this->url, 1);
    if ((!array_key_exists("Content-Length", $headers))) $filesize=0;
    $filesize = $headers["Content-Length"];
    if ($filesize != -1) {
        echo "<script>setFileSize($filesize);</script>";
    }
    $newf = fopen ($this->loction, "wb");
    $downlen=0;
    if ($newf) {
	while(!feof($file)) {
            $data=fread($file, 1024 * 8 );
            $downlen+=strlen($data);
            fwrite($newf, $data, 1024 * 8 );
            echo "<script>setDownloaded($downlen);</script>";
            ob_end_flush();
            flush();
        }
    fclose($newf);
	}
	fclose($file);
}
}



};?>
