function shuChu(a) {
  var len = a.toString().length,
    i = 0,
    s = "*",
    s1 = '';

  for (; i < len; ++i) {
    s1 += s;
  }
  document.write(s1 + "<br/>");
  document.write(a);
  document.write('<br/>');
}

function $id(obj) {
  return document.getElementById(obj);
}

function zengJishi() {
  var endtime = new Date(),
    uhao, L = endtime.getTimezoneOffset();
  L = L * 60 * 1000;
  Date.prototype.JS_format = function() {
    var hour, fen, miao, hao, uhao;
    hour = this.getHours();
    fen = this.getMinutes();
    miao = this.getSeconds();
    hao = this.getMilliseconds();
    return hour + ":" + fen + ":" + miao + ":" + hao;
  }

  endtime.setFullYear(2014, 7, 2);
  endtime.setHours(1, 55, 0, 200);
  shuChu(endtime);
  shuChu("结束时间:" + endtime.JS_format());
  uhao = endtime.getTime();
  shuChu("结束时间毫秒:" + uhao);

  var now = new Date(),
    uhao2 = Date.parse(now),
    uhao3 = uhao - uhao2,
    txt = $id('txt'),
    t;



  function a() {
    if (uhao3 > 0) {
      endtime.setTime(uhao3 + L);
      var ttt = endtime.JS_format().toString();
      $id('txt').innerHTML = uhao3 + "---" + ttt;

      //now=null;
      now = new Date();
      uhao2 = now.getTime();
      uhao3 = uhao - uhao2;
    } else {

      clearInterval(t);
    }
  }
  t = setInterval(a, 1);



  shuChu(now);
  shuChu("现在时间:" + now.JS_format());
  shuChu("现在时间毫秒:" + uhao2);

}

zengJishi();



function startTime() {
  var today = new Date()
  var h = today.getHours()
  var m = today.getMinutes()
  var s = today.getSeconds()
  var s = today.getSeconds()
  var m1 = today.getUTCMilliseconds()
    // add a zero in front of numbers<10
  m = checkTime(m)
  s = checkTime(s)
  document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + ":" + m1
  t = setTimeout('startTime()')
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}