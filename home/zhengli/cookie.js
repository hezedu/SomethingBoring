if (document.cookie.split('dw_autoplay=1').length <= 1) {
  document.writeln("<div id=\"sc\" style=\"POSITION:absolute;;Z-INDEX:99999;width: 520px;border:1px solid #ccc;padding:1px;font-size:12px\"><div style=\"width: 519px;text-align:center;line-height:25px;padding:1px;background: #efefef;\"><span onclick=\"javascript:closeSC()\" style=\"cursor:pointer;\">充值演示 关闭演示<\/span><\/div><IFRAME marginHeight=0 marginWidth=0 noResize scrolling=no frameBorder=0 src=/public/video/ad/Video.htm width=520 height=390><\/IFRAME><\/div>")

  function closeSC() {
    document.getElementById("sc").innerHTML = '';
    document.getElementById("sc").style.visibility = 'hidden';
    document.getElementById("sc").style.display = 'none';
  }
  setTimeout("closeSC();", 15000);

  function sc5() {
    document.getElementById("sc").style.top = (document.documentElement.scrollTop + document.documentElement.clientHeight - document.getElementById("sc").offsetHeight) / 2 + "px";
    document.getElementById("sc").style.left = (document.documentElement.scrollLeft + document.documentElement.clientWidth - document.getElementById("sc").offsetWidth) / 2 + "px";
  }

  function scall() {
    sc5();
  }
  window.onscroll = scall;
  window.onresize = scall;
  window.onload = scall;
  document.cookie = 'dw_autoplay=1';
}
//alert(document.cookie.split('dw_autoplay=1;').length);